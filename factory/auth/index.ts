interface Credentials {
    username: string;
    password: string;
}

interface Permission {
    name: string;
    access: 'READ' | 'WRITE' | 'DELETE'
}

interface Role {
    name: string;
    permission: Permission;
}

interface Task {
    name: string;
    dueTo: string;
}

interface BaseUser {
    id: string;
    name: string;
    credentials?: Credentials;
    token?: string;
}

interface Administrator extends BaseUser {
    roles?: Array<Permission>;
}

interface Ordinary extends BaseUser{
    tasks: Array<Task>
}

interface Authentication<T extends BaseUser> {
    signIn(user: T): Promise<T>;
    signOut(user: T): void;
}

function createAuthentication<T extends BaseUser>() {
    return class User implements Authentication<T> {
        public isAuthenticated = false;

        async signIn(user: T): Promise<T> {
            const data = await fetch('/auth', {
                method: 'POST',
                body: JSON.stringify(user.credentials)
            })

            const currentUser:T = (await data.json()) as T;

            this.isAuthenticated = true;
            user.token = currentUser.token;

            return (await data.json()) as T
        }

        signOut(user: T): void {
            this.isAuthenticated = false;
            user.token = null
        }
    }
}

const AdminAuth = createAuthentication<Administrator>()
const adminAuth = new AdminAuth();

adminAuth.signIn({
    id: '1234',
    name: 'Fake user',
    token: '23456',
    credentials: {
        username: 'john.smit',
        password: 'john.pass'
    },
    roles: []
});

const OrdinaryAuth = createAuthentication<Ordinary>();
const ordinaryUser = new OrdinaryAuth();

ordinaryUser.signIn({
    id: '5432',
    name: 'Fake user',
    token: '23456234',
    credentials: {
        username: 'john.smit',
        password: 'john.pass'
    },
    tasks: []
})

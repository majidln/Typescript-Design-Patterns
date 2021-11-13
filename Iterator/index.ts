interface IIterator {
    hasNext: () => boolean;
    next: () => MenuItem;
}

class MenuItem {
    private name: string;
    private description: string;
    private vegetarian: boolean;
    private price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getVegetarian() {
        return this.vegetarian;
    }

    public getPrice() {
        return this.price;
    }

    
}

class PancakeHouseMenu{
    private menuItems = new Set<MenuItem>();

    constructor() {
        this.addItem("Regular Pancake", "Pancake with scrambled eggs", true, 10)
    }

    public addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const newItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.add(newItem)
    }

    public createIterator() {
        return new PancakeHouseMenuIterator(this.menuItems);
    }
}

class PancakeHouseMenuIterator implements IIterator{
    private menuItems = new Set<MenuItem>();
    private position = 0;

    constructor(menuItems: Set<MenuItem>) {
       this.menuItems = menuItems;
    }

    public addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const newItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.add(newItem)
    }

    public getMenuItems() {
        return this.menuItems;
    }

    public hasNext() {
        return this.menuItems.size < this.position;
    }

    public next() {
        this.position += 1;
        return this.menuItems.entries[this.position];
    }
}

class DinnerMenu {
    private MAX_ITEM = 6;
    private NUMBER_OF_ITEMS = 0;
    private menuItems: MenuItem[] = [];

    constructor() {
        this.addItem("Soup", "Soup with meat", false, 12)
    }

    public addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const newItem = new MenuItem(name, description, vegetarian, price);
        
        if (this.NUMBER_OF_ITEMS > this.MAX_ITEM) {
            throw new Error("Sorry, Menu is full");
        } else {
            this.menuItems[this.NUMBER_OF_ITEMS] = newItem;
            this.NUMBER_OF_ITEMS += 1;
        }
    }

    public createIterator() {
        return new DinnerMenuIterator(this.menuItems)
    }
}

class DinnerMenuIterator implements IIterator{
    private menuItems: MenuItem[] = [];
    private position = 0;


    constructor(menuItems: MenuItem[]) {
        this.menuItems = menuItems
    }

    public hasNext() {
        return this.menuItems.length < this.position;
    }

    public next() {
        this.position += 1;
        return this.menuItems[this.position];
    }
}

class Waitress {
    private pancakeHouseMenu: PancakeHouseMenu;
    private dinnerMenu: DinnerMenu;

    constructor(pancakeHouseMenu: PancakeHouseMenu, dinnerMenu: DinnerMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinnerMenu = dinnerMenu;
    }

    public printMenu() {
        const pancakeHouseMenuIterator: IIterator = this.pancakeHouseMenu.createIterator();
        const dinnerMenuIterator: IIterator = this.dinnerMenu.createIterator();

        
    }

    public printMenuIterator(iterator: IIterator) {
        if (iterator.hasNext) {
            const item:MenuItem  = iterator.next();
            console.log(item.getName() , item.getPrice() , item.getDescription(), item.getVegetarian())
        }
    }
}

const pancakeHouseMenu = new PancakeHouseMenu();
const dinnerMenu = new DinnerMenu();

const waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
waitress.printMenu()
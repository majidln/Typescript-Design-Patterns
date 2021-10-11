enum TEACHER_TYPE {
    CODING,
    MUSIC
}

interface TeacherProperties {
    name: string;
}

interface CodingTeacherProperties extends TeacherProperties {
    programmingLanguage: string
}

interface MusicTeacherProperties extends TeacherProperties {
    instrument: string
}

class Teacher {
    public name: string;
    constructor(props: TeacherProperties){
        this.name = props.name
    }
}

class CodingTeacher extends Teacher {
    public programmingLanguage: string;

    constructor(props: CodingTeacherProperties) {
        super(props);

        this.programmingLanguage = props.programmingLanguage;
    }
}

class MusicTeacher extends Teacher {
    public instrument: string;

    constructor(props: MusicTeacherProperties) {
        super(props);

        this.instrument = props.instrument;
    }
}

class TeacherFactory {
    public static getTeacher(type: TEACHER_TYPE.MUSIC, properties: MusicTeacherProperties): MusicTeacher;
    public static getTeacher(type: TEACHER_TYPE.CODING, properties: CodingTeacherProperties): CodingTeacher;
    public static getTeacher(type: TEACHER_TYPE, properties: MusicTeacherProperties & CodingTeacherProperties) {
      switch (type) {
        case TEACHER_TYPE.CODING:
          return new CodingTeacher(properties);
        case TEACHER_TYPE.MUSIC:
          return new MusicTeacher(properties);
        default:
          throw new Error('Wrong teacher type chosen');
      }
    }
  }

const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.CODING, { name: "John",programmingLanguage: "Java Script"});
const musicTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.MUSIC, {
    instrument: 'Guitar',
    name: 'Andy',
  });
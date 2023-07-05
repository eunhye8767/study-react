## section 1
### 0. Hello TS World!
- 폴더를 기준으로 `npm init` -> `package.json` 생성
- `npm i @types/node` 설치
- 타입스크립트 컴파일러를 글로벌로 설치 (맥 경우) : `sudo npm install typescript -g`
- `tsc -v` : 현 타입스크립트 버전
- `tsc 컴파일파일-경로` : `tsc src/index.ts`로 컴파일하게 되면 `index.js` 생성
- `index.ts`의 콘솔 로그를 확인하고자 한다면 `node src/index.js`
- 매번 코드 작성하고 컴파일을 하기엔 번잡스럽다.<br />1. `tsc src/index.ts`<br />2. `node src/index.js`<br />때문에 `sudo npm install ts-node -g`로 패키지를 설치.<br />`ts-node src/index.ts`하면 끝!!
<br />
<br />

### 1. 타입스크립트 컴파일러 옵션 설정하기
- [타입스크립트 컴파일러 옵션 설정하기](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39)
- 컴파일러 옵션은 `package` 단위로 설정할 수 있다. (즉, 프로젝트마다 설정)
<br />

1. `tsc --init` : `tsconfig.json` 파일 생성. (타입스크립트 설정 파일)
2. [include 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#21aa35e2907547e5ac3930199ae821b3)
  - include: tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려주는 옵션.
<br />

3. [target 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#360f30d90dd248abbf1569e04b638073)
  - target : 컴파일 결과 생성되는 자바스크립트 코드의 버전을 설정.
    ```javascript
    // 화살표 함수 이전의 자바스크립트
    "compilerOptions": {"target": "ES5"},

    // ESNext === 자바스크립트 최신버전
    "compilerOptions": {"target": "ESNext"},
    ```
  <br />

4. [module 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#c7c837969ee54889a12cfbd66cd035a7)
  - module : 변환되는 자바스크립트 코드의 모듈 시스템을 설정.<br />**모든 프로젝트가 `ES6`를 지원하진 않는다. 상황에 따라 사용해야 한다.**
    ```javascript
    //  require나 exports 등의 CommonJS 문법
    "compilerOptions": { 
      "module": "CommonJS" 
    },

    // ES6 모듈 시스템
    "module": "ESNext" 
    ```
    <br />

5. [outDir 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#46a174e9caa44f08af23e701ab5bfad9)
  - outDir : 컴파일 결과 생성할 자바스크립트 코드의 위치를 결정
  - `ts` 파일이 몇 없을 때는 괜찮다지만 많을 경우, 해당 폴더에 `js` 파일까지 변환될 경우 복잡 넌잡...
  - 해서 `outDir` 옵션을 사용하여 컴파일된 `js` 파일을 모아준다.
  <br />

6. [strict 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#c39fa16068ab4a0593fdf0ea100ef2f7)
  - strict : 타입스크립트 컴파일러의 타입 검사 엄격함 수준을 정한다.
    ```javascript
    "compilerOptions": { 
      "strict": true
    },
    ```
    <br />

7. [ModuleDetection 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#eb62169cc370411bb32b3e2498b1e068)
  - ModuleDetection : 타입스크립트의 모든 파일은 기본적으로 **전역 파일(모듈)로 취급**
    ```javascript
    // a.ts
    const a = 1; // ❌

    // b.ts
    const a = 1; // ❌
    ```
  - **이럴 때에는 각 파일에 모듈 시스템 키워드(export, import)를 최소 하나 이상 사용해 해당 파일을 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 만들어야 하는데 이를 자동화 하는 옵션이 바로 moduleDetection 옵션**.
  - 개별모듈로 만들기 위해 `export {}` 또는 `import`를 사용하여 독립적인 파일로 만들어서 사용이 가능.
  - 또는 `tsconfig.json`에서 `"moduleDetection": "force",`로 적용.  <br />=> 아래와 같이 설정해주면 컴파일된 `js` 파일을 보면 `export {}` 추가된 것을 확인할 수 있다.
    ```javascript
    "compilerOptions": { 
      "moduleDetection": "force",
    }
    ```
  - `tsconfig.json`에 적용했는데 안 바뀔 경우, `TypeScript: TS 서버 다시 시작`을 해준다.
<br />

8. [ts-node 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#878a11c23d274e70a05d16ab73552007)
  - moduleDetection 옵션을 활성화 하고 타입스크립트 파일에서 모듈 시스템을 사용하게 되면 **ts-node로 실행시 오류가 발생**
  - ts-node의 옵션을 설정하면 ts-node로 타입스크립트 모듈을 실행
    ```javascript
    // package.json
    "type": "module",

    // tsconfig.json
    "ts-node": {
      "esm": true
    },
    ```
    <br />

9. [strictNullChecks 옵션]
  - 엄격한 `Null` 검사를 뜻한다.
    ```javascript
    // tsconfig.json
    "compilerOptions": {
      "strictNullChecks": false,
    }
    ```
  - `let numA: number = null` => `number` 타입에 `null` 값을 임시로 허용하겠다는 뜻.
  - `number` 타입에 엄격하게 `null` 값도 허용할 경우 `"strictNullChecks": false,` 추가하면 된다. (기본값이 `true`이기 때문에)
  - `strict`는 `strictNullChecks`의 상위 옵션으로 `strict`가  true 면 자동으로 `strictNullChecks: true`이다. 해서 null값만 엄격하게 체크하지 않을 땐 false로 값을 적용하면 되는 것.

<br />
<br />

### 2. 타입스크립트 기본
1. [원시타입과 리터럴타입](https://ts.winterlood.com/3cb27a06-78ac-499d-9270-2ebabe8c769c)
  - **리터럴 타입** : `리터럴 === 값`
    ```typescript
    let numA: 12 = 12;
    numA = 14 // Error

    let strA: "hello" = "hello"
    strA = "bye" // Error
    ```
    - 값 자체를 타입에 지정할 수 있다. 
<br />

2. [배열과 튜플](https://ts.winterlood.com/43888ee0-9227-4a8d-994e-2336ee78bfcf)
3. [객체](https://ts.winterlood.com/1c336fb6-1a90-4076-8de1-b23810a65163)
4. [타입 별칭과 인덱스 시그니쳐](https://ts.winterlood.com/156628c8-e779-4ea9-b40b-a77dd083e214)
  - 빈 배열로 적용해도 오류가 나지 않는다는 점을 명시해야 한다.
    ```javascript
    type CountryNumberCodes = {
      [key: string]: number;
    };

    let countryNumberCodes: CountryNumberCodes = {};
    ```
  - 반드시 포함해야 하는 프로퍼티가 있다면 아래와 같이 명시한다.
    ```javascript
    type CountryNumberCodes = {
      [key: string]: number;
      Korea: number
    };

    let countryNumberCodes: CountryNumberCodes = {
      Korea: 410,
      UnitedState: 820
    };
    ```
  -  **인덱스 시그니쳐**를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 **호환되거나 일치**해야 합니다. <br />따라서 다음과 같이 서로 호환되지 않는 타입으로 설정하면 오류가 발생합니다.
    ```javascript
    type CountryNumberCodes = {
      [key: string]: number;
      Korea: string; // 오류
    };
    ```
    <br />

5. [열거형 타입](https://ts.winterlood.com/ed2b0365-72ea-4c3e-b646-7e9e22a472aa)
  - 타입스크립트에만 있는 `enum 타입`
  - 여러가지 값들의 각각 이름을 부여해 열거해두고 사용하는 타입
    ```javascript
    enum Role {
      ADMIN, // 0 할당(자동)
      USER,  // 1 할당(자동)
      GUEST, // 2 할당(자동)
    }

    const user1 = {
      name: "이정환",
      role: Role.ADMIN, // 0
    };

    const user2 = {
      name: "홍길동",
      role: Role.USER, // 1
    };

    const user3 = {
      name: "아무개",
      role: Role.GUEST, // 2
    };
    ```

  - 자동 할당되는 값은 기본적으로 0부터 시작합니다. 만약 이 값을 변경하고 싶다면 다음과 같이 시작하는 위치에 값을 직접 할당해주면 됩니다. <br />그럼 자동으로 그 아래의 멤버들은 1씩 증가된 값으로 할당됩니다.
    ```javascript
    enum Role {
      ADMIN = 10, // 10 할당 
      USER,       // 11 할당(자동)
      GUEST,      // 12 할당(자동)
    }

    const user1 = {
      name: "이정환",
      role: Role.ADMIN, // 10
    };

    const user2 = {
      name: "홍길동",
      role: Role.USER, // 11
    };

    const user3 = {
      name: "아무개",
      role: Role.GUEST, // 12
    };
    ```

  - `enum(이넘)`은 컴파일되도 사라지지 않고 컴파일 시 객체로 변환이 된다.

6. [any와 unknown](https://ts.winterlood.com/41c52e6a-ad79-4b6e-b87b-909400f161fe)
  - `any` === 모든 타입.<br />**any는 최대한 사용하지 마세요**
  - `unknown 타입`은 any 타입과 비슷하지만 보다 안전한 타입입니다.<br />`unknown 타입의 변수`는 다음과 같이 **어떤 타입의 값이든 다 저장할 수 있습**니다.
    ```javascript
    let unknownVar: unknown;

    unknownVar = "";
    unknownVar = 1;
    unknownVar = () => {};
    ```
  
  - **unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.**
    ```javascript
    let num: number = 10;

    let unknownVar: unknown;
    unknownVar = "";
    unknownVar = 1;
    unknownVar = () => {};

    num = unknownVar; // 오류 !
    ```

  - **unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없습니다.**<br />단, 조건문을 이용해 이 값이 number 타입의 값임을 보장해주면 변경이 가능합니다.
    ```javascript
    if (typeof unknownVar === "number") {
      // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
      num = unknownVar;
    }
    ```

7. [void와 never](https://ts.winterlood.com/2fc094af-7fe4-46d4-8c24-bb0596172b2e)
  - `void 타입`은 아무런 값도 없음을 의미하는 타입.
    ```javascript
    function func1(): string {
      return "hello"
    }

    // void => 반환되는 값이 없을 때 === 공허 === 아무것도 없다.
    function func2(): void {
      consloe.log("hello")
    }
    ```

  - `never 타입`은 불가능을 의미하는 타입. (존재하지 않는)<br />**그 어떠한 값도 저장할 수 없다!!**
    ```javascript
    function func3(): never {
      throw new Error();
    }
    ```

<br />
<br />

### 3. 타입스크립트 이해하기
1. [타입스크립트 이해하기](https://ts.winterlood.com/d4e6723a-5590-4a32-8dd0-dd1c3a41162f)
<br />

2. [타입은 집합이다](https://ts.winterlood.com/9610eed7-2b66-4645-9181-483243a2089a)
  - 타입 == 동일한 속성, 특징들을 모아둔 집합
  - `number Type`의 부분 집합, `number literal type`
    ```javascript
    // 슈퍼타입 (부모타입)
    number Type

    // 서브타입(자식타입)
    number literal Type
    ```
<br />

3. [타입 계층도와 함께 기본타입 살펴보기](https://ts.winterlood.com/1d6906f2-b724-43d0-bc61-8ec455e6d8e8)
  [!타입 계층도 이미지](./%ED%83%80%EC%9E%85%EA%B3%84%EC%B8%B5%EB%8F%84.png)
  - `Unknown` 타입은 모든 타입의 슈퍼타입.
    - 업캐스팅으로 모든 값을 `Unknown`에 넣을 수 있다.
    - `Unknown`을 어떠한 변수에 넣을 수 없다. 다운캐스팅이 안 되서.
      ```javascript
      function unknownExam() {
        let unknownVar: unknown;

        // unknown 변수를 어떠한 값에 넣을 수 없다.
        // 그 이유는 다운캐스팅이 안 되기 때문!!
        let num: number = unknownVark;
      }
      ```
      <br />

  - `naver` 타입은 어떠한 변수도 저장될 수 없다! 
    - `naver`은 공집합. 아무것도 없다.
    - `any` 타입은 유일하게 `naver` 다운캐스팅 할 수가 없다.
  - `void` 타입은 `undefined`의 슈퍼 타입니다.
<br />

4. [객체 타입의 호환성](https://ts.winterlood.com/17ff91fc-3179-4d4c-a7dd-15c3c5781ff3)
  - 객체 타입 간의 호환성 : 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은 가?
  - 객체 타입은 프로퍼티를 기준으로 구조적 타입 시스템.
    - 슈퍼타입 = Animal / 서브타입 = Dog
    - 프로퍼티 기준으로 Dog 타입의 `breed` 타입이 없기 때문에 슈퍼 타입은 `Animal`이 된다.
    ```javascript
    type Animal = {
      name: string;
      color: string;
    }

    type Dog = {
      name: string;
      color: string;
      breed: string;
    }
    ```
    <br />

  - 초과 프로퍼티 검사
    - **초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능**.
    - **이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는다.**
    ```javascript
    type Book = {
      name: string;
      price: number;
    };

    type ProgrammingBook = {
      name: string;
      price: number;
      skill: string;
    };

    let book: Book;
    let programmingBook: ProgrammingBook = {
      name: "한 입 크기로 잘라먹는 리액트",
      price: 33000,
      skill: "reactjs",
    };

    book = programmingBook;

    // 초과 프로퍼티 검사
    let book2: Book = { // 오류 발생
      name: "한 입 크기로 잘라먹는 리액트",
      price: 33000,
      skill: "reactjs",
    };
    ```
<br />

5. [대수 타입](https://ts.winterlood.com/44460889-64bd-4d4d-83af-9983f598fd2d)
  - 대수 타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
  - 합집합 타입과 교집합 타입이 존재한다.
    <br />

  - **Union 타입 (합집합)**
    ```javascript
    let a: number | string;
    let b: (number | string)[];
    ```
    ```javascript
    type Dog = {
      name: string;
      color: string;
    }

    type Person = {
      name: string;
      language: string;
    }

    type Union1 = Dog | Person;

    let union1: Union1 = {
      name: "",
      color: "",
    }
    
    let union2: Union1 = {
      name: "",
      language: "",
    }
    
    let union3: Union1 = {
      name: "",
      color: "",
      language: "",
    }
    
    // Dog or Person 기준, color? language? 값이 없어서 에러 발생!
    let union4: Union1 = {
      name: "",
    }
    ```
    <br />

  - **Intersection 타입(교집합 타입)**
    ```javascript
    // number와 string 경우, 겹쳐지는 부분이 없기 때문에 naver를 뜻한다.
    let variable: number & string;
    ```
    ```javascript
    type Dog = {
      name: string;
      color: string;
    }

    type Person = {
      name: string;
      language: string;
    }

    type Intersection = Dog & Person;

    /**
     * 타입스크립트에서 객체 타입의 교집합은 '집합'을 기준으로 만들어진다.
     * 따라서 두개의 객체 타입의 교집합은 두 타입에 모두 속하는 요소들만 포함하는 집합으로 만들어진다.
     *  ㄴ Dog 타입에도 속하고 Person 타입에도 속해야 한다
     *  ㄴ { name, color, language }
    */
    let intersection1 : Intersection = {
      name: "",
      color: "",
      language: "",
    }
    ```
<br />

6. [타입 추론](https://ts.winterlood.com/69607da2-4cca-4b89-b808-f78bb7040c80)
<br />

7. [타입 단언](https://ts.winterlood.com/71f4a577-4340-4994-956d-a7aa47176ffa)
  - 타입 단언, as로 표기하면 초과 프로퍼티인 상황에서도 오류를 해결할 수 있다.
    ```javascript
    type Person = {
      name: string;
      age: string;
    }

    let person = {} as Person

    // 초과 프로퍼티
    type Dog = {
      name: string;
      color: string;
    }

    let dog = {
      name: "돌돌이",
      color: "brown",
      breed: "진도",
    } as Dog
    ```
    <br />
  
  - 타입 단어의 규칙 : `값 as 단언`
    ```javascript
    /**
     * A as B
     * A가 B의 슈퍼 타입이거나
     * A가 B의 서브 타입이어야 함.
    */

    // A가 B의 슈퍼타입
    // unknown은 모든 타입의 슈퍼타입
    let num1 = 10 as unknown;

    // A가 B의 서브타입
    // never은 모든 타입의 서브타입.
    let num2 = 10 as never;

    // 오류 발생 (겹치는 값이 없음.)
    let num3 = 10 as string;
    ```
  <br />

  - `const` 선언 === `readonly`
    ```javascript
    let cat = {
      name: "야용이",
      color: "yellow",
    } as const;

    cat.name = ""; // 오류발생. 수정할 수 없다.
    ```
    <br />

  - `Non Null` 단어
    ```javascript
    type Post = {
      title: string;
      author?: string;
    }

    let post: Post = {
      title: "게시글1",
      author: "이은혜",
    }

    // 아래처럼 옵셔널 체이닝을 사용할 경우 undefined 값이 생길 수 있다.
    // const len: number = post.author?.length;

    // ! 연산이 null 이나 non이 아니다 라고 선언해주는 것이기 때문에 오류 없이 사용 가능.
    // 단, author 값이 없어서 실행되기 때문에 단언은 조심히 사용하는 것을 추천(권장)
    const len: number = post.author!.length;
    ```
<br />

8. [타입 좁히기](https://ts.winterlood.com/92c2035a-49bc-4585-9e3d-43206ce92d59)
  ```javascript
  type Person = {
    name: string;
    age: number;
  }

  function func(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
      console.log(value.toFixed())
    } else if (typeof value === "string") {
      console.log(value.toUpperCase())
    } else if (value instanceof Date) {
      cosole.log(value.getTime())
    } else if (value && "age" in value) {
      // 직접 만든 타입일 때 in 연산자 사용.
      cosole.log(`${value.name}은 ${value.age}살 입니다.`)
    }
  }
  ```
<br />

9. [서로소 유니온 타입](https://ts.winterlood.com/f36a6c2b-66cb-4acc-86d4-38a8bcfb1e17)
  - 교집합이 없는 타입들로만 만든 유니온 타입을 말함,
  - 직관적이지 않은 코드
    ```javascript
    type Admin = {
      name: string;
      kickCount: number;
    }

    type Member = {
      name: string;
      point: number;
    }

    type Guest = {
      name: string;
      visitCount: number;
    }

    type User = Admin | Member | Guest;

    // Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
    // Member -> {name}님 현재까지 {point} 모았습니다.
    // Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

    // 이렇게 할 경우, 코드가 직관적이지 않아 불편하다.
    function login(user: User) {
      if ("kickCount" in user) {
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
      } else if ("point" in user) {
        // member 타입
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
      } else {
        // guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
      }
    }
    ```
  - 직관적이게 수정
    ```javascript
    type Admin = {
      tag: "ADMIN";
      name: string;
      kickCount: number;
    }

    type Member = {
      tag: "MEMBER";
      name: string;
      point: number;
    }

    type Guest = {
      tag: "GUEST";
      name: string;
      visitCount: number;
    }

    type User = Admin | Member | Guest;

    function login(user: User) {
      switch (user.tag) {
        case "ADMIN": {
          console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
          break;
        }
        case "MEMBER": {
          console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
          break;
        }
        case "GUEST": {
          console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
          break;
        }
      }
    }
    ```
    <br />

  - 복습겸 한가지 더 사례(예시) : 비동기 작업의 결과를 처리하는 객체
    ```javascript
    type AsyncTask = {
      // 값이 정해져있을 경우, 해당 값을 적용하는 것을 권장
      state: "LOADING" | "FAILED" | "SUCCESS";
      error? : {
        message: string
      };
      response?: {
        data: string
      }
    }

    // 로딩 중 -> 콘솔에 로딩중 출력
    // 실패 -> 실패 : 에러메시지를 출력
    // 성공 -> 성공 : 데이터를 출력
    function processResult(task: AsyncTask) {
      switch (task.state) {
        case "LOADING": {
          console.log("로딩중")
          break;
        }
        case "FAILED": {
          console.log(`${task.error?.message}`)
          break;
        }
        case "SUCCESS": {
          console.log(`${task.response!.data}`)
          break;
        }
      }
    }

    const loading: AsyncTask = {
      state: "LOADING",
    }

    const failed: AsyncTask = {
      state: "FAILED",
      error: {
        message: "오류"
      }
    }

    const success: AsyncTask = {
      state: "SUCCESS",
      response: {
        data: "데이터~"
      }
    }
    ```
    <br />

    - 위처럼 할 경우, 옵셔닝 체인징(?) 또는 ! 연산자를 활용해야 하기 때문에 **서로소 유니온 타입 (== 태그 유니온 타입)**을 사용한다.
    ```javascript
    type loadingTask = {
      state: "LOADING";
    }

    type failedTask = {
      state: "FAILED";
      error : {
        message: string
      };
    }

    type successTask = {
      state: "SUCCESS";
      response: {
        data: string
      }
    }

    type AsyncTask = loadingTask | failedTask | successTask;

    // 로딩 중 -> 콘솔에 로딩중 출력
    // 실패 -> 실패 : 에러메시지를 출력
    // 성공 -> 성공 : 데이터를 출력
    function processResult(task: AsyncTask) {
      switch (task.state) {
        case "LOADING": {
          console.log("로딩중")
          break;
        }
        case "FAILED": {
          console.log(`${task.error.message}`)
          break;
        }
        case "SUCCESS": {
          console.log(`${task.response.data}`)
          break;
        }
      }
    }

    const loading: AsyncTask = {
      state: "LOADING",
    }

    const failed: AsyncTask = {
      state: "FAILED",
      error: {
        message: "오류"
      }
    }

    const success: AsyncTask = {
      state: "SUCCESS",
      response: {
        data: "데이터~"
      }
    }
    ```
<br />
<br />

### 4. 함수와 타입
1. 함수타입
  - [함수타입](https://ts.winterlood.com/0fe19fd9-39ca-4e40-9aea-fe1cc68403ba)
<br />

2. 함수 타입 표현식과 호출 시그니처
  - [함수 타입 표현식과 호출 시그니처](https://ts.winterlood.com/d6b17fad-0a06-4733-89e5-c8fcaf194ed5)
    ```javascript
    // 함수 타입 표현식
    type Operation = (a: number, b: number) => number;

    const add: Operation = (a, b) => a + b;
    const sub: Operation = (a, b) => a - b;
    const multiply: Operation = (a, b) => a * b;
    const divide: Operation = (a, b) => a / b;

    // 호출 시그니처
    type Operation2 = {
      (a: number, b: number): number;
    };

    function func(a: number, b: number): number {
      return a + b;
    }

    const add2: Operation2 = (a, b) => a + b;
    const sub2: Operation2 = (a, b) => a - b;
    const multiply2: Operation2 = (a, b) => a * b;
    const divide2: Operation2 = (a, b) => a / b;
    ```
  <br />

3. 함수 타입의 호환성
  - [함수 타입의 호환성](https://ts.winterlood.com/267b10cd-5f23-4689-b2f4-0b7420523a64)
<br />

4. 함수 오버로딩
  - [함수 오버로딩](https://ts.winterlood.com/d82be2a7-e9b9-49d0-b7c5-c9073bc4d0ce)
    ```javascript
    /**
     * 함수 오버로딩
     * 같은 함수를 매개변수의 개수나 타입에 따라
     * 여러가지 버전으로 만드는 문법
     * -> 하나의 함수 func
     * -> 일단 모든 매개변수는 넘버타입
     * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
     * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
     */

    // 버전들 -> 오버로드 시그니처
    function func(a: number): void;
    function func(a: number, b: number, c: number): void;

    // 실제 구현부 -> 구현 시그니쳐
    function func(a: number, b?: number, c?: number) {
      if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
      } else {
        console.log(a * 20);
      }
    }

    func(1);
    func(1,2,3);
    ```
  <br />

5. 사용자 정의 타입 가드
  - [사용자 정의 타입 가드](https://ts.winterlood.com/479ea272-b297-49e4-9d76-958d97b319cb)
    ```javascript
    type Dog = {
      name: string;
      isBark: boolean;
    };

    type Cat = {
      name: string;
      isScratch: boolean;
    };

    // Dog 타입인지 확인하는 타입 가드
    function isDog(animal: Animal): animal is Dog {
      return (animal as Dog).isBark !== undefined;
    }

    // Cat 타입인지 확인하는 타입가드
    function isCat(animal: Animal): animal is Cat {
      return (animal as Cat).isScratch !== undefined;
    }

    function warning(animal: Animal) {
      if (isDog(animal)) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
      } else {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
      }
    }
    ```
<br />
<br />

### 5. 인터페이스
1. 인터페이스
  - [인터페이스](https://ts.winterlood.com/205a2c68-50a6-47f7-bd61-61bd47d4287a)
  - 인터페이스 : 타입의 이름을 지어주는 또 다른 문법 + 객체의 구조를 정의하는데 특화된 문법<br />(상속, 합침 등의 특수한 기능을 제공함)
    ```javascript
    interface Person {
      readonly name: string;
      age?: number;

      // 이 경우 함수 오버로딩 불가
      sayHi: () => void;

      // 함수 오버로딩 하고자 할 땐?
      sayHi(): void;
      sayHi(a:number, b:number): void
    }
    ```
    <br />

2. 인터페이스 확장하기
  - [인터페이스 확장하기](https://ts.winterlood.com/80295c08-5698-4944-b4f4-bdab8dac139c)
    ```javascript
    interface Animal {
      name: string;
      color: string;
    }

    interface Dog extends Animal {
      isBark: boolean;
    }
    
    interface Cat extends Animal {
      name: "야용";  // 원본 타입의 서브타입으로만 정의가 가능하다
      name: 11;     // 원본 타입 (string)가 맞지않아 이 경우엔 에러 발생!!!
      isScratch: boolean;
    }

    // 다중 확장도 가능하다.
    interface DogCat extends Dog, Cat {}

    const dogCat: DogCat = {
      name: "",
      color: "",
      isBark: true.
      isScratch: true,
    }
    ```
    <br />

3. 인터페이스 합치기
  - [인터페이스 합치기](https://ts.winterlood.com/85ed3032-8fdb-4a09-be30-089aff844a15)
    ```javascript
    interface Person {
      name: string
    }

    interface Person {
      age: number
    }

    // 선언 합침 = 선언 머지
    const person: Person = {
      name: "",
      age: 11,
    }
    ```
    ```javascript
    interface Person {
      name: string
    }

    interface Person {
      name: string;  // 동일한 타입으로만 가능 string === string || number === number
      age: number
    }

    // 선언 합침 = 선언 머지
    const person: Person = {
      name: "",
      age: 11,
    }
    ```
  - 인터페이스 선언 합침(또는 머지)는 **모듈 보강**할 때 자주 사용된다
    ```javascript
    interface Lib {
      a: number;
      b: number;
    }

    interface Lib {
      c: string
    }

    const lib: Lib = {
      a: 1,
      b: 2,
      c: "hello",
    }
    ```

<br />
<br />

### 6. 클래스
1. 자바스크립트의 클래스 소개
  - [자바스크립트의 클래스 소개](https://ts.winterlood.com/f9862331-98d2-4afc-a8f7-f9f1d6cf3d43)
  - [class, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
  <br />

2. 타입스크립트의 클래스
  - [타입스크립트의 클래스](https://ts.winterlood.com/2d0cc9fe-8f93-481c-9d5d-a95059febcb3)
    ```javascript
    class Employee {
      // 필드
      name: string;
      age: number;
      position: string;

      // 생성자
      constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
      }

      // 메서드
      work() {
        console.log("일함")
      }
    }

    // Employee 상속
    class ExecutiveIfficer extends Employee {
      officeNumber: number;

      constructor(name: string, age: number, position: string, officeNumber: number) {
        // super() 필수!
        super(name, age, position);
        this.officeNumber = officeNumber;
      }
    }

    const employeeB = new Employee("이은혜", 37, "퍼블리셔");

    /**
     * 타입스크립트는 해당 변수의 타입을 Employee로 지정
     * 때문에 아래와 같이 타입으로 지정하여 사용할 수 있다.
    */
    const employeeC :Employee = {
      name: "",
      age: 0,
      position: "",
      work() {},
    }
    ```
  <br />

3. 접근 제어자
  - [접근 제어자](https://ts.winterlood.com/428ae2b8-7b91-4635-93fd-6f4103167c9b)
    ```javascript
    /**
     * 접근 제어자 access modifier
     *   => public private protected
     *        ㄴ public : class 외부에서도 접근 가능 (기본값)
     *        ㄴ private : 접근 불가능, class 내부에서만 접근이 가능(= 메서드에서 사용 가능)(파생된 extends에서도 사용 불가능)
     *        ㄴ protected : class 내부에서만 접근이 가능(파생된 extends에서도 사용이 가능)
    */

    class Employee {
      // 필드
      // public name: string; 
      // public 기본값, 표기하지 않아도 된다.
      name: string;

      private age: number;
      protected position: string;

      // 생성자
      constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
      }

      // 메서드
      work() {
        console.log(`${this.age}, private는 class 내부에서만 접근이 가능`)
        console.log(`이렇게 메서드에선 접근(활용)이 가능하다.`)
        console.log(`파생 클래스(extends)에서도 사용이 불가능 하다.`)
      }
    }

    class ExecutiveIfficer extends Employee {
      officeNumber: number;

      constructor(name: string, age: number, position: string, officeNumber: number) {
        // super() 필수!
        super(name, age, position);
        this.officeNumber = officeNumber;
      }

      func() {
        // 오류발생
        // private => 파생 클래스(extends)에서 사용 불가능.
        this.name

        // protected => 파생된 extends에서도 사용이 가능
        this.position
      }
    }


    const employeeA = new Employee("이은혜", 37, "퍼블리셔");

    // class 외부에서도 접근 가능
    employeeA.name = "독곤";
    ```

  - 생성자(`constructor`)에서 `접근 제어자`를 써줄 경우, 필드와 `this.name = name`과 같은 부분은 지워준다<br />그 이유는 자동으로 생성되기 때문이다.
    ```javascript
    class Employee {
      // 필드

      // 생성자
      constructor(public name: string, private age: number, protected position: string) {}
    }
    ```
  <br />

4. 인터페이스와 클래스
  - [인터페이스와 클래스](https://ts.winterlood.com/7d20a0b1-0d69-47aa-864f-136dc96e0259)
    ```javascript
    interface CharacterInterface {
      // interface는 기본적으로 public 이다.
      name: string;
      moveSpeed: number;
      move(): void;
    }

    // implements = 직역, 구현한다.
    class Character implements CharacterInterface {
      // public 외에 추가사항이 있을 경우 아래와 같이 작성.
      constructor(public name: string, public moveSpeed: number, private extra: string) {}

      moveSpeed(): void {
        consloe.log(`${this.moveSpeed} 속도로 이동!`);
      }
    }

    /**
     * interface를 먼저 만들고 구현하는 일은 거의 없다.
     * 라이브러리 구현이나 정교한 작업이 필요할 땐 사용할 일이 생길 수 있다.
    */
    ```

  <br />
  <br />

### 7. 제네릭
1. 제네릭 소개
  - [제네릭 소개](https://ts.winterlood.com/0e41a293-21d9-419e-8e2a-57b5813e0582)
    ```javascript
    // 제네릭 == 범용적인, 종합 
    // <T> => 타입 변수를 가르킨다.
    function func<T>(value: T): T {
      return value
    }

    let num = func(10); // number
    let bool = func(true) // boolean

    // 튜플 타입 적용할 때
    let arr = func<[number, number, number]>([1,2,3]); // [number, number, number]
    ```
  <br />

2. 타입 변수 응용하기
  - [타입 변수 응용하기](https://ts.winterlood.com/0d88be7e-7804-4b03-9ea5-25bc23ada02c)
  - 첫번째 사례
    ```javascript
    // 타입이 다를 경우, 여러개를 지정해서 사용할 수 있다.
    function swap<T, U>(a:T, b: U) {
      return [b, a]
    }

    const [a, b] = swap("1", 2);  // [number, string]
    ```

  - 두번째 사례
    ```javascript
    function returnFirstValue<T>(data:[T, ...unknown[]]) {
      return data[0]
    }

    let num: returnFirstValue([0, 1, 2]); // 0 : number

    let str: returnFirstValue([14, "hello", "mynameis"]);  // 14 : number
    ```

  - 세번째 사례
    ```javascript
    // length가 있는 지 확장하는 타입 변수(T).
    function getLength<T extends { length: number }>(data: T) {
      return data.length;
    }

    let var1 = getLength([1,2,3]);
    let var2 = getLength("123456");
    let var3 = getLength({ length: 10 });
    let var4 = getLength(10);
    ```
  <br />

3. map, forEach 메서드 타입 정의하기
  - [map, forEach 메서드 타입 정의하기](https://ts.winterlood.com/d1f277c4-9576-4fbc-b8f7-00507f96bb07)
  - map 메서드
    ```javascript
    const arr = [1, 2, 3]
    
    function map<T>(arr: T[], callback: (item: T) => T) {
      let result = [];
      for (let i = 0; i < arr.length; i++>) {
        result.push(calback(arr[i]));
      }
    }

    map(arr, (it) => it * 2); // [2,4,6]
    map(["hi", "hello"], (it) => it.toUpperCase()); // ["HI", "HELLO"]

    function map2<T, U>(arr: T[], callback: (item: T) => U) {
      let result = [];
      for (let i = 0; i < arr.length; i++>) {
        result.push(calback(arr[i]));
      }
    }

    map(["hi", "hello"], (it) => parseInt(it)); // [NaN, NaN]
    ```

  - forEach 메서드
    ```javascript
    const arr2 = [1,2,3]

    function forEach<T>(arr: T[], callback: (item: T) => void) {
      for (let i = 0; i < arr.length; i++>) {
        calback(arr[i])
      }
    }

    forEach(arr2, (it) => console.log(it.toFixed()))
    ```
  <br />

4. 제네릭 인터페이스 & 제네릭 타입 별칭
  - [제네릭 인터페이스 & 제네릭 타입 별칭](https://ts.winterlood.com/f674004b-5584-4c9c-badb-d9593b3bb288)
  - 제네릭 인터페이스
    ```javascript
    /**
     * K, V 처럼
     * 타입 변수 => 타입 파라미터 , 제네릭 타입 변수, 제네릭 타입 파라미터 로 불러진다.
    */

    interface KeyPair<K, V> {
      key: K;
      value: V;
    }

    let keyPair: KeyPair<string, number> = {
      ket : "key",
      value: 0,
    }

    let keyPair: KeyPair<boolean, string[]> = {
      key: true,
      value: ["1"]
    }
    ```

  - 인덱스 시그니처 & 제네릭 인터페이스
    ```javascript
    interface Map<V> {
      [key: string]: V;
    }

    let stringMap: Map<string> = {
      key: "value"
    }
    
    let stringMap: Map<boolean> = {
      key: true
    }
    ```

  - 제네릭 타입 별칭
    ```javascript
    type Map2<V> = {
      [key: string]: V;
    }

    let stringMap2: Map2<string> = {
      key: "hello"
    }
    ```

  - 제네릭 인터페이스의 활용 예시
    - 유저 관리 프로그램
    - 유저 구분 : 학생 유저 / 개발자 유저
    ```javascript
    interface Student {
      type: "student";
      school: string;
    }

    interface Developer {
      type: "developer";
      skill: string;
    }

    interface User {
      name: string;
      profile: Student | Developer;
    }

    function goToSchool(user: User) {
      if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다");
        return;
      }

      const school = user.profile.school;
      console.log(`${school} 등교 완료`);
    }

    const developerUser: User = {
      name: "이은혜",
      profile: {
        type: "developer",
        skill: "TypeScript",
      }
    }
    
    const studentUser: User = {
      name: "박요셉",
      profile: {
        type: "student",
        scroll: "온수초",
      }
    }
    ```

    - 많은 유저와 단계가 많아지게 되면 불필요한 함수 등이 많아질 수 있어<Br />이럴 때 제너릭을 이용한다.
    ```javascript
    interface Student {
      type: "student";
      school: string;
    }

    interface Developer {
      type: "developer";
      skill: string;
    }

    interface User<T> {
      name: string;
      profile: T;
    }

    function goToSchool(user: User<Student>) {
      const school = user.profile.school;
      console.log(`${school} 등교 완료`);
    }

    const developerUser: User<Developer> = {
      name: "이은혜",
      profile: {
        type: "developer",
        skill: "TypeScript",
      }
    }
    
    const studentUser: User<Student> = {
      name: "박요셉",
      profile: {
        type: "student",
        scroll: "온수초",
      }
    }
    ```

  <br />

5. 제네릭 클래스
  - [제네릭 클래스](https://ts.winterlood.com/b9f92968-95e6-434e-bd33-a0fd48bbf070)
    ```javascript
    class List<T> {
      constructor(private list: T[]) {}

      push(data: T) {
        this.list.push(data)
      }

      pop() {
        return this.list.pop();
      }

      print() {
        console.log(this.list);
      }
    }

    const numberList = new List([1,2,3])
    numberList.pop();
    numberList.push(4);
    numberList.print(); // [1,2,4]
    ```
  <br />

6. 프로미스와 제네릭
  - [프로미스와 제네릭](https://ts.winterlood.com/8ea82f04-a28a-4987-8a46-12fd40d277cd)
    ```javascript
    /**
     * resolve 
     *   ㄴ resolve 타입은 unknown 으로 타입값을 명시해줘야 한다.
    */
    const promise = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        // 성공
        // resolve(20);
        
        // 실패
        reject("~~때문에 실패")
      })
    })

    promise.then((response) => {
      console.log(response * 10)
    })

    promise.then((err) => {
      if (typeof err === "string") {
        console.log(err)
      }
    })
    ```

  - 프로미스를 반환하는 함수의 타입을 정의 (ex. 서버에서 게시글을 받아와야 하는 상황)
    ```javascript
    interface Post {
      id: number;
      title: string;
      content: string;
    }

    function fetchPost(): Promise<Post> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            id: 1,
            title: "게시글 제목",
            content: "게시글 컨텐츠"
          })
        }, 3000)
      })
    }

    const postRequest = fetchPost();
    postRequest.then((post) => {
      post.id;
    })
    ```

<br />
<br />
## section 1
### 1. Hello TS World!
- 폴더를 기준으로 `npm init` -> `package.json` 생성
- `npm i @types/node` 설치
- 타입스크립트 컴파일러를 글로벌로 설치 (맥 경우) : `sudo npm install typescript -g`
- `tsc -v` : 현 타입스크립트 버전
- `tsc 컴파일파일-경로` : `tsc src/index.ts`로 컴파일하게 되면 `index.js` 생성
- `index.ts`의 콘솔 로그를 확인하고자 한다면 `node src/index.js`
- 매번 코드 작성하고 컴파일을 하기엔 번잡스럽다.<br />1. `tsc src/index.ts`<br />2. `node src/index.js`<br />때문에 `sudo npm install ts-node -g`로 패키지를 설치.<br />`ts-node src/index.ts`하면 끝!!
<br />
<br />

### 2. 타입스크립트 컴파일러 옵션 설정하기
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

### 3. 타입스크립트 기본
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
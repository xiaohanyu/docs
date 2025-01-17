## Extends

- `Error`

## Constructors

### constructor()

> **new LogtoClientError**(`code`, `data`?): [`LogtoClientError`](class.LogtoClientError.md)

#### Parameters

| Parameter | Type                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------ |
| `code`    | `"sign_in_session.invalid"` \| `"sign_in_session.not_found"` \| `"not_authenticated"` \| `"fetch_user_info_failed"` |
| `data`?   | `unknown`                                                                                                           |

#### Returns

[`LogtoClientError`](class.LogtoClientError.md)

#### Overrides

Error.constructor

#### Source

../client/lib/errors.d.ts:11

## Properties

### cause

> `optional` **cause**: `unknown`

#### Source

node_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

Error.cause

---

### code

> **code**: `"sign_in_session.invalid"` \| `"sign_in_session.not_found"` \| `"not_authenticated"` \| `"fetch_user_info_failed"`

#### Source

../client/lib/errors.d.ts:9

---

### data

> **data**: `unknown`

#### Source

../client/lib/errors.d.ts:10

---

### message

> **message**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1068

#### Inherited from

Error.message

---

### name

> **name**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1067

#### Inherited from

Error.name

---

### stack

> `optional` **stack**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1069

#### Inherited from

Error.stack

---

### prepareStackTrace

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Parameter     | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Source

node_modules/@types/node/globals.d.ts:11

#### Inherited from

Error.prepareStackTrace

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Source

node_modules/@types/node/globals.d.ts:13

#### Inherited from

Error.stackTraceLimit

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

| Parameter         | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Source

node_modules/@types/node/globals.d.ts:4


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Tech
 * 
 */
export type Tech = $Result.DefaultSelection<Prisma.$TechPayload>
/**
 * Model ArrTech
 * 
 */
export type ArrTech = $Result.DefaultSelection<Prisma.$ArrTechPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model ArrDesc
 * 
 */
export type ArrDesc = $Result.DefaultSelection<Prisma.$ArrDescPayload>
/**
 * Model ArrTechWork
 * 
 */
export type ArrTechWork = $Result.DefaultSelection<Prisma.$ArrTechWorkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Option: {
  true: 'true',
  false: 'false'
};

export type Option = (typeof Option)[keyof typeof Option]

}

export type Option = $Enums.Option

export const Option: typeof $Enums.Option

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tech`: Exposes CRUD operations for the **Tech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teches
    * const teches = await prisma.tech.findMany()
    * ```
    */
  get tech(): Prisma.TechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arrTech`: Exposes CRUD operations for the **ArrTech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArrTeches
    * const arrTeches = await prisma.arrTech.findMany()
    * ```
    */
  get arrTech(): Prisma.ArrTechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arrDesc`: Exposes CRUD operations for the **ArrDesc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArrDescs
    * const arrDescs = await prisma.arrDesc.findMany()
    * ```
    */
  get arrDesc(): Prisma.ArrDescDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arrTechWork`: Exposes CRUD operations for the **ArrTechWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArrTechWorks
    * const arrTechWorks = await prisma.arrTechWork.findMany()
    * ```
    */
  get arrTechWork(): Prisma.ArrTechWorkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Project: 'Project',
    Tech: 'Tech',
    ArrTech: 'ArrTech',
    Work: 'Work',
    ArrDesc: 'ArrDesc',
    ArrTechWork: 'ArrTechWork'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "project" | "tech" | "arrTech" | "work" | "arrDesc" | "arrTechWork"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Tech: {
        payload: Prisma.$TechPayload<ExtArgs>
        fields: Prisma.TechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          findFirst: {
            args: Prisma.TechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          findMany: {
            args: Prisma.TechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>[]
          }
          create: {
            args: Prisma.TechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          createMany: {
            args: Prisma.TechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>[]
          }
          delete: {
            args: Prisma.TechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          update: {
            args: Prisma.TechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          deleteMany: {
            args: Prisma.TechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>[]
          }
          upsert: {
            args: Prisma.TechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechPayload>
          }
          aggregate: {
            args: Prisma.TechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTech>
          }
          groupBy: {
            args: Prisma.TechGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechCountArgs<ExtArgs>
            result: $Utils.Optional<TechCountAggregateOutputType> | number
          }
        }
      }
      ArrTech: {
        payload: Prisma.$ArrTechPayload<ExtArgs>
        fields: Prisma.ArrTechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrTechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrTechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          findFirst: {
            args: Prisma.ArrTechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrTechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          findMany: {
            args: Prisma.ArrTechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>[]
          }
          create: {
            args: Prisma.ArrTechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          createMany: {
            args: Prisma.ArrTechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArrTechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>[]
          }
          delete: {
            args: Prisma.ArrTechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          update: {
            args: Prisma.ArrTechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          deleteMany: {
            args: Prisma.ArrTechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArrTechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArrTechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>[]
          }
          upsert: {
            args: Prisma.ArrTechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechPayload>
          }
          aggregate: {
            args: Prisma.ArrTechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArrTech>
          }
          groupBy: {
            args: Prisma.ArrTechGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArrTechGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrTechCountArgs<ExtArgs>
            result: $Utils.Optional<ArrTechCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      ArrDesc: {
        payload: Prisma.$ArrDescPayload<ExtArgs>
        fields: Prisma.ArrDescFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrDescFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrDescFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          findFirst: {
            args: Prisma.ArrDescFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrDescFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          findMany: {
            args: Prisma.ArrDescFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>[]
          }
          create: {
            args: Prisma.ArrDescCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          createMany: {
            args: Prisma.ArrDescCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArrDescCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>[]
          }
          delete: {
            args: Prisma.ArrDescDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          update: {
            args: Prisma.ArrDescUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          deleteMany: {
            args: Prisma.ArrDescDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArrDescUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArrDescUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>[]
          }
          upsert: {
            args: Prisma.ArrDescUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrDescPayload>
          }
          aggregate: {
            args: Prisma.ArrDescAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArrDesc>
          }
          groupBy: {
            args: Prisma.ArrDescGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArrDescGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrDescCountArgs<ExtArgs>
            result: $Utils.Optional<ArrDescCountAggregateOutputType> | number
          }
        }
      }
      ArrTechWork: {
        payload: Prisma.$ArrTechWorkPayload<ExtArgs>
        fields: Prisma.ArrTechWorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrTechWorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrTechWorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          findFirst: {
            args: Prisma.ArrTechWorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrTechWorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          findMany: {
            args: Prisma.ArrTechWorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>[]
          }
          create: {
            args: Prisma.ArrTechWorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          createMany: {
            args: Prisma.ArrTechWorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArrTechWorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>[]
          }
          delete: {
            args: Prisma.ArrTechWorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          update: {
            args: Prisma.ArrTechWorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          deleteMany: {
            args: Prisma.ArrTechWorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArrTechWorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArrTechWorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>[]
          }
          upsert: {
            args: Prisma.ArrTechWorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrTechWorkPayload>
          }
          aggregate: {
            args: Prisma.ArrTechWorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArrTechWork>
          }
          groupBy: {
            args: Prisma.ArrTechWorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArrTechWorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrTechWorkCountArgs<ExtArgs>
            result: $Utils.Optional<ArrTechWorkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    project?: ProjectOmit
    tech?: TechOmit
    arrTech?: ArrTechOmit
    work?: WorkOmit
    arrDesc?: ArrDescOmit
    arrTechWork?: ArrTechWorkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    profile: number
    project: number
    tech: number
    work: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserCountOutputTypeCountProfileArgs
    project?: boolean | UserCountOutputTypeCountProjectArgs
    tech?: boolean | UserCountOutputTypeCountTechArgs
    work?: boolean | UserCountOutputTypeCountWorkArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTechArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    techstack: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techstack?: boolean | ProjectCountOutputTypeCountTechstackArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTechstackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrTechWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    description: number
    technology: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | WorkCountOutputTypeCountDescriptionArgs
    technology?: boolean | WorkCountOutputTypeCountTechnologyArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrDescWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountTechnologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrTechWorkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    tech?: boolean | User$techArgs<ExtArgs>
    work?: boolean | User$workArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    tech?: boolean | User$techArgs<ExtArgs>
    work?: boolean | User$workArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>[]
      tech: Prisma.$TechPayload<ExtArgs>[]
      work: Prisma.$WorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends User$projectArgs<ExtArgs> = {}>(args?: Subset<T, User$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tech<T extends User$techArgs<ExtArgs> = {}>(args?: Subset<T, User$techArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    work<T extends User$workArgs<ExtArgs> = {}>(args?: Subset<T, User$workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * User.project
   */
  export type User$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.tech
   */
  export type User$techArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    where?: TechWhereInput
    orderBy?: TechOrderByWithRelationInput | TechOrderByWithRelationInput[]
    cursor?: TechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechScalarFieldEnum | TechScalarFieldEnum[]
  }

  /**
   * User.work
   */
  export type User$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    surname: string | null
    images: string | null
    profession: string | null
    bio: string | null
    location: string | null
    status: $Enums.Option | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    surname: string | null
    images: string | null
    profession: string | null
    bio: string | null
    location: string | null
    status: $Enums.Option | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    surname: number
    images: number
    profession: number
    bio: number
    location: number
    status: number
    userId: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    surname?: true
    images?: true
    profession?: true
    bio?: true
    location?: true
    status?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    surname?: true
    images?: true
    profession?: true
    bio?: true
    location?: true
    status?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    surname?: true
    images?: true
    profession?: true
    bio?: true
    location?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
    userId: string
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    images?: boolean
    profession?: boolean
    bio?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    images?: boolean
    profession?: boolean
    bio?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    images?: boolean
    profession?: boolean
    bio?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    surname?: boolean
    images?: boolean
    profession?: boolean
    bio?: boolean
    location?: boolean
    status?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surname" | "images" | "profession" | "bio" | "location" | "status" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surname: string
      images: string
      profession: string
      bio: string
      location: string
      status: $Enums.Option
      userId: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly surname: FieldRef<"Profile", 'String'>
    readonly images: FieldRef<"Profile", 'String'>
    readonly profession: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly location: FieldRef<"Profile", 'String'>
    readonly status: FieldRef<"Profile", 'Option'>
    readonly userId: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    demo: string | null
    github: string | null
    images: string | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    demo: string | null
    github: string | null
    images: string | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    demo: number
    github: number
    images: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    demo?: true
    github?: true
    images?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    demo?: true
    github?: true
    images?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    demo?: true
    github?: true
    images?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    demo: string | null
    github: string | null
    images: string
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    demo?: boolean
    github?: boolean
    images?: boolean
    userId?: boolean
    techstack?: boolean | Project$techstackArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    demo?: boolean
    github?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    demo?: boolean
    github?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    demo?: boolean
    github?: boolean
    images?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "demo" | "github" | "images" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techstack?: boolean | Project$techstackArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      techstack: Prisma.$ArrTechPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      demo: string | null
      github: string | null
      images: string
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techstack<T extends Project$techstackArgs<ExtArgs> = {}>(args?: Subset<T, Project$techstackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly demo: FieldRef<"Project", 'String'>
    readonly github: FieldRef<"Project", 'String'>
    readonly images: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.techstack
   */
  export type Project$techstackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    where?: ArrTechWhereInput
    orderBy?: ArrTechOrderByWithRelationInput | ArrTechOrderByWithRelationInput[]
    cursor?: ArrTechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrTechScalarFieldEnum | ArrTechScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Tech
   */

  export type AggregateTech = {
    _count: TechCountAggregateOutputType | null
    _min: TechMinAggregateOutputType | null
    _max: TechMaxAggregateOutputType | null
  }

  export type TechMinAggregateOutputType = {
    id: string | null
    name: string | null
    images: string | null
    userId: string | null
  }

  export type TechMaxAggregateOutputType = {
    id: string | null
    name: string | null
    images: string | null
    userId: string | null
  }

  export type TechCountAggregateOutputType = {
    id: number
    name: number
    images: number
    userId: number
    _all: number
  }


  export type TechMinAggregateInputType = {
    id?: true
    name?: true
    images?: true
    userId?: true
  }

  export type TechMaxAggregateInputType = {
    id?: true
    name?: true
    images?: true
    userId?: true
  }

  export type TechCountAggregateInputType = {
    id?: true
    name?: true
    images?: true
    userId?: true
    _all?: true
  }

  export type TechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tech to aggregate.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: TechOrderByWithRelationInput | TechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teches
    **/
    _count?: true | TechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechMaxAggregateInputType
  }

  export type GetTechAggregateType<T extends TechAggregateArgs> = {
        [P in keyof T & keyof AggregateTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTech[P]>
      : GetScalarType<T[P], AggregateTech[P]>
  }




  export type TechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechWhereInput
    orderBy?: TechOrderByWithAggregationInput | TechOrderByWithAggregationInput[]
    by: TechScalarFieldEnum[] | TechScalarFieldEnum
    having?: TechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechCountAggregateInputType | true
    _min?: TechMinAggregateInputType
    _max?: TechMaxAggregateInputType
  }

  export type TechGroupByOutputType = {
    id: string
    name: string
    images: string
    userId: string
    _count: TechCountAggregateOutputType | null
    _min: TechMinAggregateOutputType | null
    _max: TechMaxAggregateOutputType | null
  }

  type GetTechGroupByPayload<T extends TechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechGroupByOutputType[P]>
            : GetScalarType<T[P], TechGroupByOutputType[P]>
        }
      >
    >


  export type TechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tech"]>

  export type TechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tech"]>

  export type TechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tech"]>

  export type TechSelectScalar = {
    id?: boolean
    name?: boolean
    images?: boolean
    userId?: boolean
  }

  export type TechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "images" | "userId", ExtArgs["result"]["tech"]>
  export type TechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tech"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      images: string
      userId: string
    }, ExtArgs["result"]["tech"]>
    composites: {}
  }

  type TechGetPayload<S extends boolean | null | undefined | TechDefaultArgs> = $Result.GetResult<Prisma.$TechPayload, S>

  type TechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechCountAggregateInputType | true
    }

  export interface TechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tech'], meta: { name: 'Tech' } }
    /**
     * Find zero or one Tech that matches the filter.
     * @param {TechFindUniqueArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechFindUniqueArgs>(args: SelectSubset<T, TechFindUniqueArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechFindUniqueOrThrowArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechFindUniqueOrThrowArgs>(args: SelectSubset<T, TechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindFirstArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechFindFirstArgs>(args?: SelectSubset<T, TechFindFirstArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindFirstOrThrowArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechFindFirstOrThrowArgs>(args?: SelectSubset<T, TechFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teches
     * const teches = await prisma.tech.findMany()
     * 
     * // Get first 10 Teches
     * const teches = await prisma.tech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techWithIdOnly = await prisma.tech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechFindManyArgs>(args?: SelectSubset<T, TechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tech.
     * @param {TechCreateArgs} args - Arguments to create a Tech.
     * @example
     * // Create one Tech
     * const Tech = await prisma.tech.create({
     *   data: {
     *     // ... data to create a Tech
     *   }
     * })
     * 
     */
    create<T extends TechCreateArgs>(args: SelectSubset<T, TechCreateArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teches.
     * @param {TechCreateManyArgs} args - Arguments to create many Teches.
     * @example
     * // Create many Teches
     * const tech = await prisma.tech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechCreateManyArgs>(args?: SelectSubset<T, TechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teches and returns the data saved in the database.
     * @param {TechCreateManyAndReturnArgs} args - Arguments to create many Teches.
     * @example
     * // Create many Teches
     * const tech = await prisma.tech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teches and only return the `id`
     * const techWithIdOnly = await prisma.tech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechCreateManyAndReturnArgs>(args?: SelectSubset<T, TechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tech.
     * @param {TechDeleteArgs} args - Arguments to delete one Tech.
     * @example
     * // Delete one Tech
     * const Tech = await prisma.tech.delete({
     *   where: {
     *     // ... filter to delete one Tech
     *   }
     * })
     * 
     */
    delete<T extends TechDeleteArgs>(args: SelectSubset<T, TechDeleteArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tech.
     * @param {TechUpdateArgs} args - Arguments to update one Tech.
     * @example
     * // Update one Tech
     * const tech = await prisma.tech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechUpdateArgs>(args: SelectSubset<T, TechUpdateArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teches.
     * @param {TechDeleteManyArgs} args - Arguments to filter Teches to delete.
     * @example
     * // Delete a few Teches
     * const { count } = await prisma.tech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechDeleteManyArgs>(args?: SelectSubset<T, TechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teches
     * const tech = await prisma.tech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechUpdateManyArgs>(args: SelectSubset<T, TechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teches and returns the data updated in the database.
     * @param {TechUpdateManyAndReturnArgs} args - Arguments to update many Teches.
     * @example
     * // Update many Teches
     * const tech = await prisma.tech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teches and only return the `id`
     * const techWithIdOnly = await prisma.tech.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechUpdateManyAndReturnArgs>(args: SelectSubset<T, TechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tech.
     * @param {TechUpsertArgs} args - Arguments to update or create a Tech.
     * @example
     * // Update or create a Tech
     * const tech = await prisma.tech.upsert({
     *   create: {
     *     // ... data to create a Tech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tech we want to update
     *   }
     * })
     */
    upsert<T extends TechUpsertArgs>(args: SelectSubset<T, TechUpsertArgs<ExtArgs>>): Prisma__TechClient<$Result.GetResult<Prisma.$TechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechCountArgs} args - Arguments to filter Teches to count.
     * @example
     * // Count the number of Teches
     * const count = await prisma.tech.count({
     *   where: {
     *     // ... the filter for the Teches we want to count
     *   }
     * })
    **/
    count<T extends TechCountArgs>(
      args?: Subset<T, TechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechAggregateArgs>(args: Subset<T, TechAggregateArgs>): Prisma.PrismaPromise<GetTechAggregateType<T>>

    /**
     * Group by Tech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechGroupByArgs['orderBy'] }
        : { orderBy?: TechGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tech model
   */
  readonly fields: TechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tech model
   */
  interface TechFieldRefs {
    readonly id: FieldRef<"Tech", 'String'>
    readonly name: FieldRef<"Tech", 'String'>
    readonly images: FieldRef<"Tech", 'String'>
    readonly userId: FieldRef<"Tech", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tech findUnique
   */
  export type TechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter, which Tech to fetch.
     */
    where: TechWhereUniqueInput
  }

  /**
   * Tech findUniqueOrThrow
   */
  export type TechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter, which Tech to fetch.
     */
    where: TechWhereUniqueInput
  }

  /**
   * Tech findFirst
   */
  export type TechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter, which Tech to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: TechOrderByWithRelationInput | TechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teches.
     */
    distinct?: TechScalarFieldEnum | TechScalarFieldEnum[]
  }

  /**
   * Tech findFirstOrThrow
   */
  export type TechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter, which Tech to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: TechOrderByWithRelationInput | TechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teches.
     */
    distinct?: TechScalarFieldEnum | TechScalarFieldEnum[]
  }

  /**
   * Tech findMany
   */
  export type TechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter, which Teches to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: TechOrderByWithRelationInput | TechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    distinct?: TechScalarFieldEnum | TechScalarFieldEnum[]
  }

  /**
   * Tech create
   */
  export type TechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * The data needed to create a Tech.
     */
    data: XOR<TechCreateInput, TechUncheckedCreateInput>
  }

  /**
   * Tech createMany
   */
  export type TechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teches.
     */
    data: TechCreateManyInput | TechCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tech createManyAndReturn
   */
  export type TechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * The data used to create many Teches.
     */
    data: TechCreateManyInput | TechCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tech update
   */
  export type TechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * The data needed to update a Tech.
     */
    data: XOR<TechUpdateInput, TechUncheckedUpdateInput>
    /**
     * Choose, which Tech to update.
     */
    where: TechWhereUniqueInput
  }

  /**
   * Tech updateMany
   */
  export type TechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teches.
     */
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyInput>
    /**
     * Filter which Teches to update
     */
    where?: TechWhereInput
    /**
     * Limit how many Teches to update.
     */
    limit?: number
  }

  /**
   * Tech updateManyAndReturn
   */
  export type TechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * The data used to update Teches.
     */
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyInput>
    /**
     * Filter which Teches to update
     */
    where?: TechWhereInput
    /**
     * Limit how many Teches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tech upsert
   */
  export type TechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * The filter to search for the Tech to update in case it exists.
     */
    where: TechWhereUniqueInput
    /**
     * In case the Tech found by the `where` argument doesn't exist, create a new Tech with this data.
     */
    create: XOR<TechCreateInput, TechUncheckedCreateInput>
    /**
     * In case the Tech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechUpdateInput, TechUncheckedUpdateInput>
  }

  /**
   * Tech delete
   */
  export type TechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
    /**
     * Filter which Tech to delete.
     */
    where: TechWhereUniqueInput
  }

  /**
   * Tech deleteMany
   */
  export type TechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teches to delete
     */
    where?: TechWhereInput
    /**
     * Limit how many Teches to delete.
     */
    limit?: number
  }

  /**
   * Tech without action
   */
  export type TechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tech
     */
    omit?: TechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechInclude<ExtArgs> | null
  }


  /**
   * Model ArrTech
   */

  export type AggregateArrTech = {
    _count: ArrTechCountAggregateOutputType | null
    _min: ArrTechMinAggregateOutputType | null
    _max: ArrTechMaxAggregateOutputType | null
  }

  export type ArrTechMinAggregateOutputType = {
    id: string | null
    techstack: string | null
    techId: string | null
  }

  export type ArrTechMaxAggregateOutputType = {
    id: string | null
    techstack: string | null
    techId: string | null
  }

  export type ArrTechCountAggregateOutputType = {
    id: number
    techstack: number
    techId: number
    _all: number
  }


  export type ArrTechMinAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
  }

  export type ArrTechMaxAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
  }

  export type ArrTechCountAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
    _all?: true
  }

  export type ArrTechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrTech to aggregate.
     */
    where?: ArrTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTeches to fetch.
     */
    orderBy?: ArrTechOrderByWithRelationInput | ArrTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArrTeches
    **/
    _count?: true | ArrTechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrTechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrTechMaxAggregateInputType
  }

  export type GetArrTechAggregateType<T extends ArrTechAggregateArgs> = {
        [P in keyof T & keyof AggregateArrTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrTech[P]>
      : GetScalarType<T[P], AggregateArrTech[P]>
  }




  export type ArrTechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrTechWhereInput
    orderBy?: ArrTechOrderByWithAggregationInput | ArrTechOrderByWithAggregationInput[]
    by: ArrTechScalarFieldEnum[] | ArrTechScalarFieldEnum
    having?: ArrTechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrTechCountAggregateInputType | true
    _min?: ArrTechMinAggregateInputType
    _max?: ArrTechMaxAggregateInputType
  }

  export type ArrTechGroupByOutputType = {
    id: string
    techstack: string
    techId: string
    _count: ArrTechCountAggregateOutputType | null
    _min: ArrTechMinAggregateOutputType | null
    _max: ArrTechMaxAggregateOutputType | null
  }

  type GetArrTechGroupByPayload<T extends ArrTechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrTechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrTechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrTechGroupByOutputType[P]>
            : GetScalarType<T[P], ArrTechGroupByOutputType[P]>
        }
      >
    >


  export type ArrTechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTech"]>

  export type ArrTechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTech"]>

  export type ArrTechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTech"]>

  export type ArrTechSelectScalar = {
    id?: boolean
    techstack?: boolean
    techId?: boolean
  }

  export type ArrTechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "techstack" | "techId", ExtArgs["result"]["arrTech"]>
  export type ArrTechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ArrTechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ArrTechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ArrTechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArrTech"
    objects: {
      tech: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      techstack: string
      techId: string
    }, ExtArgs["result"]["arrTech"]>
    composites: {}
  }

  type ArrTechGetPayload<S extends boolean | null | undefined | ArrTechDefaultArgs> = $Result.GetResult<Prisma.$ArrTechPayload, S>

  type ArrTechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArrTechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArrTechCountAggregateInputType | true
    }

  export interface ArrTechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArrTech'], meta: { name: 'ArrTech' } }
    /**
     * Find zero or one ArrTech that matches the filter.
     * @param {ArrTechFindUniqueArgs} args - Arguments to find a ArrTech
     * @example
     * // Get one ArrTech
     * const arrTech = await prisma.arrTech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArrTechFindUniqueArgs>(args: SelectSubset<T, ArrTechFindUniqueArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArrTech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArrTechFindUniqueOrThrowArgs} args - Arguments to find a ArrTech
     * @example
     * // Get one ArrTech
     * const arrTech = await prisma.arrTech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArrTechFindUniqueOrThrowArgs>(args: SelectSubset<T, ArrTechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrTech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechFindFirstArgs} args - Arguments to find a ArrTech
     * @example
     * // Get one ArrTech
     * const arrTech = await prisma.arrTech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArrTechFindFirstArgs>(args?: SelectSubset<T, ArrTechFindFirstArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrTech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechFindFirstOrThrowArgs} args - Arguments to find a ArrTech
     * @example
     * // Get one ArrTech
     * const arrTech = await prisma.arrTech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArrTechFindFirstOrThrowArgs>(args?: SelectSubset<T, ArrTechFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArrTeches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArrTeches
     * const arrTeches = await prisma.arrTech.findMany()
     * 
     * // Get first 10 ArrTeches
     * const arrTeches = await prisma.arrTech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arrTechWithIdOnly = await prisma.arrTech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArrTechFindManyArgs>(args?: SelectSubset<T, ArrTechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArrTech.
     * @param {ArrTechCreateArgs} args - Arguments to create a ArrTech.
     * @example
     * // Create one ArrTech
     * const ArrTech = await prisma.arrTech.create({
     *   data: {
     *     // ... data to create a ArrTech
     *   }
     * })
     * 
     */
    create<T extends ArrTechCreateArgs>(args: SelectSubset<T, ArrTechCreateArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArrTeches.
     * @param {ArrTechCreateManyArgs} args - Arguments to create many ArrTeches.
     * @example
     * // Create many ArrTeches
     * const arrTech = await prisma.arrTech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArrTechCreateManyArgs>(args?: SelectSubset<T, ArrTechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArrTeches and returns the data saved in the database.
     * @param {ArrTechCreateManyAndReturnArgs} args - Arguments to create many ArrTeches.
     * @example
     * // Create many ArrTeches
     * const arrTech = await prisma.arrTech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArrTeches and only return the `id`
     * const arrTechWithIdOnly = await prisma.arrTech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArrTechCreateManyAndReturnArgs>(args?: SelectSubset<T, ArrTechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArrTech.
     * @param {ArrTechDeleteArgs} args - Arguments to delete one ArrTech.
     * @example
     * // Delete one ArrTech
     * const ArrTech = await prisma.arrTech.delete({
     *   where: {
     *     // ... filter to delete one ArrTech
     *   }
     * })
     * 
     */
    delete<T extends ArrTechDeleteArgs>(args: SelectSubset<T, ArrTechDeleteArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArrTech.
     * @param {ArrTechUpdateArgs} args - Arguments to update one ArrTech.
     * @example
     * // Update one ArrTech
     * const arrTech = await prisma.arrTech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArrTechUpdateArgs>(args: SelectSubset<T, ArrTechUpdateArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArrTeches.
     * @param {ArrTechDeleteManyArgs} args - Arguments to filter ArrTeches to delete.
     * @example
     * // Delete a few ArrTeches
     * const { count } = await prisma.arrTech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArrTechDeleteManyArgs>(args?: SelectSubset<T, ArrTechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArrTeches
     * const arrTech = await prisma.arrTech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArrTechUpdateManyArgs>(args: SelectSubset<T, ArrTechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrTeches and returns the data updated in the database.
     * @param {ArrTechUpdateManyAndReturnArgs} args - Arguments to update many ArrTeches.
     * @example
     * // Update many ArrTeches
     * const arrTech = await prisma.arrTech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArrTeches and only return the `id`
     * const arrTechWithIdOnly = await prisma.arrTech.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArrTechUpdateManyAndReturnArgs>(args: SelectSubset<T, ArrTechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArrTech.
     * @param {ArrTechUpsertArgs} args - Arguments to update or create a ArrTech.
     * @example
     * // Update or create a ArrTech
     * const arrTech = await prisma.arrTech.upsert({
     *   create: {
     *     // ... data to create a ArrTech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArrTech we want to update
     *   }
     * })
     */
    upsert<T extends ArrTechUpsertArgs>(args: SelectSubset<T, ArrTechUpsertArgs<ExtArgs>>): Prisma__ArrTechClient<$Result.GetResult<Prisma.$ArrTechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArrTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechCountArgs} args - Arguments to filter ArrTeches to count.
     * @example
     * // Count the number of ArrTeches
     * const count = await prisma.arrTech.count({
     *   where: {
     *     // ... the filter for the ArrTeches we want to count
     *   }
     * })
    **/
    count<T extends ArrTechCountArgs>(
      args?: Subset<T, ArrTechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrTechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArrTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArrTechAggregateArgs>(args: Subset<T, ArrTechAggregateArgs>): Prisma.PrismaPromise<GetArrTechAggregateType<T>>

    /**
     * Group by ArrTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArrTechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrTechGroupByArgs['orderBy'] }
        : { orderBy?: ArrTechGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrTechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArrTech model
   */
  readonly fields: ArrTechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArrTech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrTechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tech<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArrTech model
   */
  interface ArrTechFieldRefs {
    readonly id: FieldRef<"ArrTech", 'String'>
    readonly techstack: FieldRef<"ArrTech", 'String'>
    readonly techId: FieldRef<"ArrTech", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArrTech findUnique
   */
  export type ArrTechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter, which ArrTech to fetch.
     */
    where: ArrTechWhereUniqueInput
  }

  /**
   * ArrTech findUniqueOrThrow
   */
  export type ArrTechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter, which ArrTech to fetch.
     */
    where: ArrTechWhereUniqueInput
  }

  /**
   * ArrTech findFirst
   */
  export type ArrTechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter, which ArrTech to fetch.
     */
    where?: ArrTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTeches to fetch.
     */
    orderBy?: ArrTechOrderByWithRelationInput | ArrTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrTeches.
     */
    cursor?: ArrTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrTeches.
     */
    distinct?: ArrTechScalarFieldEnum | ArrTechScalarFieldEnum[]
  }

  /**
   * ArrTech findFirstOrThrow
   */
  export type ArrTechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter, which ArrTech to fetch.
     */
    where?: ArrTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTeches to fetch.
     */
    orderBy?: ArrTechOrderByWithRelationInput | ArrTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrTeches.
     */
    cursor?: ArrTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrTeches.
     */
    distinct?: ArrTechScalarFieldEnum | ArrTechScalarFieldEnum[]
  }

  /**
   * ArrTech findMany
   */
  export type ArrTechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter, which ArrTeches to fetch.
     */
    where?: ArrTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTeches to fetch.
     */
    orderBy?: ArrTechOrderByWithRelationInput | ArrTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArrTeches.
     */
    cursor?: ArrTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTeches.
     */
    skip?: number
    distinct?: ArrTechScalarFieldEnum | ArrTechScalarFieldEnum[]
  }

  /**
   * ArrTech create
   */
  export type ArrTechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * The data needed to create a ArrTech.
     */
    data: XOR<ArrTechCreateInput, ArrTechUncheckedCreateInput>
  }

  /**
   * ArrTech createMany
   */
  export type ArrTechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArrTeches.
     */
    data: ArrTechCreateManyInput | ArrTechCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArrTech createManyAndReturn
   */
  export type ArrTechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * The data used to create many ArrTeches.
     */
    data: ArrTechCreateManyInput | ArrTechCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrTech update
   */
  export type ArrTechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * The data needed to update a ArrTech.
     */
    data: XOR<ArrTechUpdateInput, ArrTechUncheckedUpdateInput>
    /**
     * Choose, which ArrTech to update.
     */
    where: ArrTechWhereUniqueInput
  }

  /**
   * ArrTech updateMany
   */
  export type ArrTechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArrTeches.
     */
    data: XOR<ArrTechUpdateManyMutationInput, ArrTechUncheckedUpdateManyInput>
    /**
     * Filter which ArrTeches to update
     */
    where?: ArrTechWhereInput
    /**
     * Limit how many ArrTeches to update.
     */
    limit?: number
  }

  /**
   * ArrTech updateManyAndReturn
   */
  export type ArrTechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * The data used to update ArrTeches.
     */
    data: XOR<ArrTechUpdateManyMutationInput, ArrTechUncheckedUpdateManyInput>
    /**
     * Filter which ArrTeches to update
     */
    where?: ArrTechWhereInput
    /**
     * Limit how many ArrTeches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrTech upsert
   */
  export type ArrTechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * The filter to search for the ArrTech to update in case it exists.
     */
    where: ArrTechWhereUniqueInput
    /**
     * In case the ArrTech found by the `where` argument doesn't exist, create a new ArrTech with this data.
     */
    create: XOR<ArrTechCreateInput, ArrTechUncheckedCreateInput>
    /**
     * In case the ArrTech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrTechUpdateInput, ArrTechUncheckedUpdateInput>
  }

  /**
   * ArrTech delete
   */
  export type ArrTechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
    /**
     * Filter which ArrTech to delete.
     */
    where: ArrTechWhereUniqueInput
  }

  /**
   * ArrTech deleteMany
   */
  export type ArrTechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrTeches to delete
     */
    where?: ArrTechWhereInput
    /**
     * Limit how many ArrTeches to delete.
     */
    limit?: number
  }

  /**
   * ArrTech without action
   */
  export type ArrTechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTech
     */
    select?: ArrTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTech
     */
    omit?: ArrTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    startDate: string | null
    endDate: string | null
    images: string | null
    userId: string | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    startDate: string | null
    endDate: string | null
    images: string | null
    userId: string | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    title: number
    company: number
    location: number
    startDate: number
    endDate: number
    images: number
    userId: number
    _all: number
  }


  export type WorkMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    images?: true
    userId?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    images?: true
    userId?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    images?: true
    userId?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    userId: string
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    images?: boolean
    userId?: boolean
    description?: boolean | Work$descriptionArgs<ExtArgs>
    technology?: boolean | Work$technologyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    images?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    images?: boolean
    userId?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "location" | "startDate" | "endDate" | "images" | "userId", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | Work$descriptionArgs<ExtArgs>
    technology?: boolean | Work$technologyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      description: Prisma.$ArrDescPayload<ExtArgs>[]
      technology: Prisma.$ArrTechWorkPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      location: string
      startDate: string
      endDate: string
      images: string
      userId: string
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    description<T extends Work$descriptionArgs<ExtArgs> = {}>(args?: Subset<T, Work$descriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    technology<T extends Work$technologyArgs<ExtArgs> = {}>(args?: Subset<T, Work$technologyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly title: FieldRef<"Work", 'String'>
    readonly company: FieldRef<"Work", 'String'>
    readonly location: FieldRef<"Work", 'String'>
    readonly startDate: FieldRef<"Work", 'String'>
    readonly endDate: FieldRef<"Work", 'String'>
    readonly images: FieldRef<"Work", 'String'>
    readonly userId: FieldRef<"Work", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.description
   */
  export type Work$descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    where?: ArrDescWhereInput
    orderBy?: ArrDescOrderByWithRelationInput | ArrDescOrderByWithRelationInput[]
    cursor?: ArrDescWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrDescScalarFieldEnum | ArrDescScalarFieldEnum[]
  }

  /**
   * Work.technology
   */
  export type Work$technologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    where?: ArrTechWorkWhereInput
    orderBy?: ArrTechWorkOrderByWithRelationInput | ArrTechWorkOrderByWithRelationInput[]
    cursor?: ArrTechWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrTechWorkScalarFieldEnum | ArrTechWorkScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model ArrDesc
   */

  export type AggregateArrDesc = {
    _count: ArrDescCountAggregateOutputType | null
    _min: ArrDescMinAggregateOutputType | null
    _max: ArrDescMaxAggregateOutputType | null
  }

  export type ArrDescMinAggregateOutputType = {
    id: string | null
    desc: string | null
    descriptionId: string | null
  }

  export type ArrDescMaxAggregateOutputType = {
    id: string | null
    desc: string | null
    descriptionId: string | null
  }

  export type ArrDescCountAggregateOutputType = {
    id: number
    desc: number
    descriptionId: number
    _all: number
  }


  export type ArrDescMinAggregateInputType = {
    id?: true
    desc?: true
    descriptionId?: true
  }

  export type ArrDescMaxAggregateInputType = {
    id?: true
    desc?: true
    descriptionId?: true
  }

  export type ArrDescCountAggregateInputType = {
    id?: true
    desc?: true
    descriptionId?: true
    _all?: true
  }

  export type ArrDescAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrDesc to aggregate.
     */
    where?: ArrDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrDescs to fetch.
     */
    orderBy?: ArrDescOrderByWithRelationInput | ArrDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArrDescs
    **/
    _count?: true | ArrDescCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrDescMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrDescMaxAggregateInputType
  }

  export type GetArrDescAggregateType<T extends ArrDescAggregateArgs> = {
        [P in keyof T & keyof AggregateArrDesc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrDesc[P]>
      : GetScalarType<T[P], AggregateArrDesc[P]>
  }




  export type ArrDescGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrDescWhereInput
    orderBy?: ArrDescOrderByWithAggregationInput | ArrDescOrderByWithAggregationInput[]
    by: ArrDescScalarFieldEnum[] | ArrDescScalarFieldEnum
    having?: ArrDescScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrDescCountAggregateInputType | true
    _min?: ArrDescMinAggregateInputType
    _max?: ArrDescMaxAggregateInputType
  }

  export type ArrDescGroupByOutputType = {
    id: string
    desc: string
    descriptionId: string
    _count: ArrDescCountAggregateOutputType | null
    _min: ArrDescMinAggregateOutputType | null
    _max: ArrDescMaxAggregateOutputType | null
  }

  type GetArrDescGroupByPayload<T extends ArrDescGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrDescGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrDescGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrDescGroupByOutputType[P]>
            : GetScalarType<T[P], ArrDescGroupByOutputType[P]>
        }
      >
    >


  export type ArrDescSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    descriptionId?: boolean
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrDesc"]>

  export type ArrDescSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    descriptionId?: boolean
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrDesc"]>

  export type ArrDescSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    descriptionId?: boolean
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrDesc"]>

  export type ArrDescSelectScalar = {
    id?: boolean
    desc?: boolean
    descriptionId?: boolean
  }

  export type ArrDescOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "desc" | "descriptionId", ExtArgs["result"]["arrDesc"]>
  export type ArrDescInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type ArrDescIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type ArrDescIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $ArrDescPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArrDesc"
    objects: {
      description: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      desc: string
      descriptionId: string
    }, ExtArgs["result"]["arrDesc"]>
    composites: {}
  }

  type ArrDescGetPayload<S extends boolean | null | undefined | ArrDescDefaultArgs> = $Result.GetResult<Prisma.$ArrDescPayload, S>

  type ArrDescCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArrDescFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArrDescCountAggregateInputType | true
    }

  export interface ArrDescDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArrDesc'], meta: { name: 'ArrDesc' } }
    /**
     * Find zero or one ArrDesc that matches the filter.
     * @param {ArrDescFindUniqueArgs} args - Arguments to find a ArrDesc
     * @example
     * // Get one ArrDesc
     * const arrDesc = await prisma.arrDesc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArrDescFindUniqueArgs>(args: SelectSubset<T, ArrDescFindUniqueArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArrDesc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArrDescFindUniqueOrThrowArgs} args - Arguments to find a ArrDesc
     * @example
     * // Get one ArrDesc
     * const arrDesc = await prisma.arrDesc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArrDescFindUniqueOrThrowArgs>(args: SelectSubset<T, ArrDescFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrDesc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescFindFirstArgs} args - Arguments to find a ArrDesc
     * @example
     * // Get one ArrDesc
     * const arrDesc = await prisma.arrDesc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArrDescFindFirstArgs>(args?: SelectSubset<T, ArrDescFindFirstArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrDesc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescFindFirstOrThrowArgs} args - Arguments to find a ArrDesc
     * @example
     * // Get one ArrDesc
     * const arrDesc = await prisma.arrDesc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArrDescFindFirstOrThrowArgs>(args?: SelectSubset<T, ArrDescFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArrDescs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArrDescs
     * const arrDescs = await prisma.arrDesc.findMany()
     * 
     * // Get first 10 ArrDescs
     * const arrDescs = await prisma.arrDesc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arrDescWithIdOnly = await prisma.arrDesc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArrDescFindManyArgs>(args?: SelectSubset<T, ArrDescFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArrDesc.
     * @param {ArrDescCreateArgs} args - Arguments to create a ArrDesc.
     * @example
     * // Create one ArrDesc
     * const ArrDesc = await prisma.arrDesc.create({
     *   data: {
     *     // ... data to create a ArrDesc
     *   }
     * })
     * 
     */
    create<T extends ArrDescCreateArgs>(args: SelectSubset<T, ArrDescCreateArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArrDescs.
     * @param {ArrDescCreateManyArgs} args - Arguments to create many ArrDescs.
     * @example
     * // Create many ArrDescs
     * const arrDesc = await prisma.arrDesc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArrDescCreateManyArgs>(args?: SelectSubset<T, ArrDescCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArrDescs and returns the data saved in the database.
     * @param {ArrDescCreateManyAndReturnArgs} args - Arguments to create many ArrDescs.
     * @example
     * // Create many ArrDescs
     * const arrDesc = await prisma.arrDesc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArrDescs and only return the `id`
     * const arrDescWithIdOnly = await prisma.arrDesc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArrDescCreateManyAndReturnArgs>(args?: SelectSubset<T, ArrDescCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArrDesc.
     * @param {ArrDescDeleteArgs} args - Arguments to delete one ArrDesc.
     * @example
     * // Delete one ArrDesc
     * const ArrDesc = await prisma.arrDesc.delete({
     *   where: {
     *     // ... filter to delete one ArrDesc
     *   }
     * })
     * 
     */
    delete<T extends ArrDescDeleteArgs>(args: SelectSubset<T, ArrDescDeleteArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArrDesc.
     * @param {ArrDescUpdateArgs} args - Arguments to update one ArrDesc.
     * @example
     * // Update one ArrDesc
     * const arrDesc = await prisma.arrDesc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArrDescUpdateArgs>(args: SelectSubset<T, ArrDescUpdateArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArrDescs.
     * @param {ArrDescDeleteManyArgs} args - Arguments to filter ArrDescs to delete.
     * @example
     * // Delete a few ArrDescs
     * const { count } = await prisma.arrDesc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArrDescDeleteManyArgs>(args?: SelectSubset<T, ArrDescDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrDescs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArrDescs
     * const arrDesc = await prisma.arrDesc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArrDescUpdateManyArgs>(args: SelectSubset<T, ArrDescUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrDescs and returns the data updated in the database.
     * @param {ArrDescUpdateManyAndReturnArgs} args - Arguments to update many ArrDescs.
     * @example
     * // Update many ArrDescs
     * const arrDesc = await prisma.arrDesc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArrDescs and only return the `id`
     * const arrDescWithIdOnly = await prisma.arrDesc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArrDescUpdateManyAndReturnArgs>(args: SelectSubset<T, ArrDescUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArrDesc.
     * @param {ArrDescUpsertArgs} args - Arguments to update or create a ArrDesc.
     * @example
     * // Update or create a ArrDesc
     * const arrDesc = await prisma.arrDesc.upsert({
     *   create: {
     *     // ... data to create a ArrDesc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArrDesc we want to update
     *   }
     * })
     */
    upsert<T extends ArrDescUpsertArgs>(args: SelectSubset<T, ArrDescUpsertArgs<ExtArgs>>): Prisma__ArrDescClient<$Result.GetResult<Prisma.$ArrDescPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArrDescs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescCountArgs} args - Arguments to filter ArrDescs to count.
     * @example
     * // Count the number of ArrDescs
     * const count = await prisma.arrDesc.count({
     *   where: {
     *     // ... the filter for the ArrDescs we want to count
     *   }
     * })
    **/
    count<T extends ArrDescCountArgs>(
      args?: Subset<T, ArrDescCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrDescCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArrDesc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArrDescAggregateArgs>(args: Subset<T, ArrDescAggregateArgs>): Prisma.PrismaPromise<GetArrDescAggregateType<T>>

    /**
     * Group by ArrDesc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrDescGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArrDescGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrDescGroupByArgs['orderBy'] }
        : { orderBy?: ArrDescGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrDescGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrDescGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArrDesc model
   */
  readonly fields: ArrDescFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArrDesc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrDescClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    description<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArrDesc model
   */
  interface ArrDescFieldRefs {
    readonly id: FieldRef<"ArrDesc", 'String'>
    readonly desc: FieldRef<"ArrDesc", 'String'>
    readonly descriptionId: FieldRef<"ArrDesc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArrDesc findUnique
   */
  export type ArrDescFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter, which ArrDesc to fetch.
     */
    where: ArrDescWhereUniqueInput
  }

  /**
   * ArrDesc findUniqueOrThrow
   */
  export type ArrDescFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter, which ArrDesc to fetch.
     */
    where: ArrDescWhereUniqueInput
  }

  /**
   * ArrDesc findFirst
   */
  export type ArrDescFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter, which ArrDesc to fetch.
     */
    where?: ArrDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrDescs to fetch.
     */
    orderBy?: ArrDescOrderByWithRelationInput | ArrDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrDescs.
     */
    cursor?: ArrDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrDescs.
     */
    distinct?: ArrDescScalarFieldEnum | ArrDescScalarFieldEnum[]
  }

  /**
   * ArrDesc findFirstOrThrow
   */
  export type ArrDescFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter, which ArrDesc to fetch.
     */
    where?: ArrDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrDescs to fetch.
     */
    orderBy?: ArrDescOrderByWithRelationInput | ArrDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrDescs.
     */
    cursor?: ArrDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrDescs.
     */
    distinct?: ArrDescScalarFieldEnum | ArrDescScalarFieldEnum[]
  }

  /**
   * ArrDesc findMany
   */
  export type ArrDescFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter, which ArrDescs to fetch.
     */
    where?: ArrDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrDescs to fetch.
     */
    orderBy?: ArrDescOrderByWithRelationInput | ArrDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArrDescs.
     */
    cursor?: ArrDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrDescs.
     */
    skip?: number
    distinct?: ArrDescScalarFieldEnum | ArrDescScalarFieldEnum[]
  }

  /**
   * ArrDesc create
   */
  export type ArrDescCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * The data needed to create a ArrDesc.
     */
    data: XOR<ArrDescCreateInput, ArrDescUncheckedCreateInput>
  }

  /**
   * ArrDesc createMany
   */
  export type ArrDescCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArrDescs.
     */
    data: ArrDescCreateManyInput | ArrDescCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArrDesc createManyAndReturn
   */
  export type ArrDescCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * The data used to create many ArrDescs.
     */
    data: ArrDescCreateManyInput | ArrDescCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrDesc update
   */
  export type ArrDescUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * The data needed to update a ArrDesc.
     */
    data: XOR<ArrDescUpdateInput, ArrDescUncheckedUpdateInput>
    /**
     * Choose, which ArrDesc to update.
     */
    where: ArrDescWhereUniqueInput
  }

  /**
   * ArrDesc updateMany
   */
  export type ArrDescUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArrDescs.
     */
    data: XOR<ArrDescUpdateManyMutationInput, ArrDescUncheckedUpdateManyInput>
    /**
     * Filter which ArrDescs to update
     */
    where?: ArrDescWhereInput
    /**
     * Limit how many ArrDescs to update.
     */
    limit?: number
  }

  /**
   * ArrDesc updateManyAndReturn
   */
  export type ArrDescUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * The data used to update ArrDescs.
     */
    data: XOR<ArrDescUpdateManyMutationInput, ArrDescUncheckedUpdateManyInput>
    /**
     * Filter which ArrDescs to update
     */
    where?: ArrDescWhereInput
    /**
     * Limit how many ArrDescs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrDesc upsert
   */
  export type ArrDescUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * The filter to search for the ArrDesc to update in case it exists.
     */
    where: ArrDescWhereUniqueInput
    /**
     * In case the ArrDesc found by the `where` argument doesn't exist, create a new ArrDesc with this data.
     */
    create: XOR<ArrDescCreateInput, ArrDescUncheckedCreateInput>
    /**
     * In case the ArrDesc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrDescUpdateInput, ArrDescUncheckedUpdateInput>
  }

  /**
   * ArrDesc delete
   */
  export type ArrDescDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
    /**
     * Filter which ArrDesc to delete.
     */
    where: ArrDescWhereUniqueInput
  }

  /**
   * ArrDesc deleteMany
   */
  export type ArrDescDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrDescs to delete
     */
    where?: ArrDescWhereInput
    /**
     * Limit how many ArrDescs to delete.
     */
    limit?: number
  }

  /**
   * ArrDesc without action
   */
  export type ArrDescDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrDesc
     */
    select?: ArrDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrDesc
     */
    omit?: ArrDescOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrDescInclude<ExtArgs> | null
  }


  /**
   * Model ArrTechWork
   */

  export type AggregateArrTechWork = {
    _count: ArrTechWorkCountAggregateOutputType | null
    _min: ArrTechWorkMinAggregateOutputType | null
    _max: ArrTechWorkMaxAggregateOutputType | null
  }

  export type ArrTechWorkMinAggregateOutputType = {
    id: string | null
    techstack: string | null
    techId: string | null
  }

  export type ArrTechWorkMaxAggregateOutputType = {
    id: string | null
    techstack: string | null
    techId: string | null
  }

  export type ArrTechWorkCountAggregateOutputType = {
    id: number
    techstack: number
    techId: number
    _all: number
  }


  export type ArrTechWorkMinAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
  }

  export type ArrTechWorkMaxAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
  }

  export type ArrTechWorkCountAggregateInputType = {
    id?: true
    techstack?: true
    techId?: true
    _all?: true
  }

  export type ArrTechWorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrTechWork to aggregate.
     */
    where?: ArrTechWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTechWorks to fetch.
     */
    orderBy?: ArrTechWorkOrderByWithRelationInput | ArrTechWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrTechWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTechWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTechWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArrTechWorks
    **/
    _count?: true | ArrTechWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrTechWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrTechWorkMaxAggregateInputType
  }

  export type GetArrTechWorkAggregateType<T extends ArrTechWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateArrTechWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrTechWork[P]>
      : GetScalarType<T[P], AggregateArrTechWork[P]>
  }




  export type ArrTechWorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrTechWorkWhereInput
    orderBy?: ArrTechWorkOrderByWithAggregationInput | ArrTechWorkOrderByWithAggregationInput[]
    by: ArrTechWorkScalarFieldEnum[] | ArrTechWorkScalarFieldEnum
    having?: ArrTechWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrTechWorkCountAggregateInputType | true
    _min?: ArrTechWorkMinAggregateInputType
    _max?: ArrTechWorkMaxAggregateInputType
  }

  export type ArrTechWorkGroupByOutputType = {
    id: string
    techstack: string
    techId: string
    _count: ArrTechWorkCountAggregateOutputType | null
    _min: ArrTechWorkMinAggregateOutputType | null
    _max: ArrTechWorkMaxAggregateOutputType | null
  }

  type GetArrTechWorkGroupByPayload<T extends ArrTechWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrTechWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrTechWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrTechWorkGroupByOutputType[P]>
            : GetScalarType<T[P], ArrTechWorkGroupByOutputType[P]>
        }
      >
    >


  export type ArrTechWorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTechWork"]>

  export type ArrTechWorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTechWork"]>

  export type ArrTechWorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    techstack?: boolean
    techId?: boolean
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrTechWork"]>

  export type ArrTechWorkSelectScalar = {
    id?: boolean
    techstack?: boolean
    techId?: boolean
  }

  export type ArrTechWorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "techstack" | "techId", ExtArgs["result"]["arrTechWork"]>
  export type ArrTechWorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type ArrTechWorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type ArrTechWorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tech?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $ArrTechWorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArrTechWork"
    objects: {
      tech: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      techstack: string
      techId: string
    }, ExtArgs["result"]["arrTechWork"]>
    composites: {}
  }

  type ArrTechWorkGetPayload<S extends boolean | null | undefined | ArrTechWorkDefaultArgs> = $Result.GetResult<Prisma.$ArrTechWorkPayload, S>

  type ArrTechWorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArrTechWorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArrTechWorkCountAggregateInputType | true
    }

  export interface ArrTechWorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArrTechWork'], meta: { name: 'ArrTechWork' } }
    /**
     * Find zero or one ArrTechWork that matches the filter.
     * @param {ArrTechWorkFindUniqueArgs} args - Arguments to find a ArrTechWork
     * @example
     * // Get one ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArrTechWorkFindUniqueArgs>(args: SelectSubset<T, ArrTechWorkFindUniqueArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArrTechWork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArrTechWorkFindUniqueOrThrowArgs} args - Arguments to find a ArrTechWork
     * @example
     * // Get one ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArrTechWorkFindUniqueOrThrowArgs>(args: SelectSubset<T, ArrTechWorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrTechWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkFindFirstArgs} args - Arguments to find a ArrTechWork
     * @example
     * // Get one ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArrTechWorkFindFirstArgs>(args?: SelectSubset<T, ArrTechWorkFindFirstArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrTechWork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkFindFirstOrThrowArgs} args - Arguments to find a ArrTechWork
     * @example
     * // Get one ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArrTechWorkFindFirstOrThrowArgs>(args?: SelectSubset<T, ArrTechWorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArrTechWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArrTechWorks
     * const arrTechWorks = await prisma.arrTechWork.findMany()
     * 
     * // Get first 10 ArrTechWorks
     * const arrTechWorks = await prisma.arrTechWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arrTechWorkWithIdOnly = await prisma.arrTechWork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArrTechWorkFindManyArgs>(args?: SelectSubset<T, ArrTechWorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArrTechWork.
     * @param {ArrTechWorkCreateArgs} args - Arguments to create a ArrTechWork.
     * @example
     * // Create one ArrTechWork
     * const ArrTechWork = await prisma.arrTechWork.create({
     *   data: {
     *     // ... data to create a ArrTechWork
     *   }
     * })
     * 
     */
    create<T extends ArrTechWorkCreateArgs>(args: SelectSubset<T, ArrTechWorkCreateArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArrTechWorks.
     * @param {ArrTechWorkCreateManyArgs} args - Arguments to create many ArrTechWorks.
     * @example
     * // Create many ArrTechWorks
     * const arrTechWork = await prisma.arrTechWork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArrTechWorkCreateManyArgs>(args?: SelectSubset<T, ArrTechWorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArrTechWorks and returns the data saved in the database.
     * @param {ArrTechWorkCreateManyAndReturnArgs} args - Arguments to create many ArrTechWorks.
     * @example
     * // Create many ArrTechWorks
     * const arrTechWork = await prisma.arrTechWork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArrTechWorks and only return the `id`
     * const arrTechWorkWithIdOnly = await prisma.arrTechWork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArrTechWorkCreateManyAndReturnArgs>(args?: SelectSubset<T, ArrTechWorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArrTechWork.
     * @param {ArrTechWorkDeleteArgs} args - Arguments to delete one ArrTechWork.
     * @example
     * // Delete one ArrTechWork
     * const ArrTechWork = await prisma.arrTechWork.delete({
     *   where: {
     *     // ... filter to delete one ArrTechWork
     *   }
     * })
     * 
     */
    delete<T extends ArrTechWorkDeleteArgs>(args: SelectSubset<T, ArrTechWorkDeleteArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArrTechWork.
     * @param {ArrTechWorkUpdateArgs} args - Arguments to update one ArrTechWork.
     * @example
     * // Update one ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArrTechWorkUpdateArgs>(args: SelectSubset<T, ArrTechWorkUpdateArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArrTechWorks.
     * @param {ArrTechWorkDeleteManyArgs} args - Arguments to filter ArrTechWorks to delete.
     * @example
     * // Delete a few ArrTechWorks
     * const { count } = await prisma.arrTechWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArrTechWorkDeleteManyArgs>(args?: SelectSubset<T, ArrTechWorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrTechWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArrTechWorks
     * const arrTechWork = await prisma.arrTechWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArrTechWorkUpdateManyArgs>(args: SelectSubset<T, ArrTechWorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrTechWorks and returns the data updated in the database.
     * @param {ArrTechWorkUpdateManyAndReturnArgs} args - Arguments to update many ArrTechWorks.
     * @example
     * // Update many ArrTechWorks
     * const arrTechWork = await prisma.arrTechWork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArrTechWorks and only return the `id`
     * const arrTechWorkWithIdOnly = await prisma.arrTechWork.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArrTechWorkUpdateManyAndReturnArgs>(args: SelectSubset<T, ArrTechWorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArrTechWork.
     * @param {ArrTechWorkUpsertArgs} args - Arguments to update or create a ArrTechWork.
     * @example
     * // Update or create a ArrTechWork
     * const arrTechWork = await prisma.arrTechWork.upsert({
     *   create: {
     *     // ... data to create a ArrTechWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArrTechWork we want to update
     *   }
     * })
     */
    upsert<T extends ArrTechWorkUpsertArgs>(args: SelectSubset<T, ArrTechWorkUpsertArgs<ExtArgs>>): Prisma__ArrTechWorkClient<$Result.GetResult<Prisma.$ArrTechWorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArrTechWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkCountArgs} args - Arguments to filter ArrTechWorks to count.
     * @example
     * // Count the number of ArrTechWorks
     * const count = await prisma.arrTechWork.count({
     *   where: {
     *     // ... the filter for the ArrTechWorks we want to count
     *   }
     * })
    **/
    count<T extends ArrTechWorkCountArgs>(
      args?: Subset<T, ArrTechWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrTechWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArrTechWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArrTechWorkAggregateArgs>(args: Subset<T, ArrTechWorkAggregateArgs>): Prisma.PrismaPromise<GetArrTechWorkAggregateType<T>>

    /**
     * Group by ArrTechWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrTechWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArrTechWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrTechWorkGroupByArgs['orderBy'] }
        : { orderBy?: ArrTechWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrTechWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrTechWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArrTechWork model
   */
  readonly fields: ArrTechWorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArrTechWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrTechWorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tech<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArrTechWork model
   */
  interface ArrTechWorkFieldRefs {
    readonly id: FieldRef<"ArrTechWork", 'String'>
    readonly techstack: FieldRef<"ArrTechWork", 'String'>
    readonly techId: FieldRef<"ArrTechWork", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArrTechWork findUnique
   */
  export type ArrTechWorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter, which ArrTechWork to fetch.
     */
    where: ArrTechWorkWhereUniqueInput
  }

  /**
   * ArrTechWork findUniqueOrThrow
   */
  export type ArrTechWorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter, which ArrTechWork to fetch.
     */
    where: ArrTechWorkWhereUniqueInput
  }

  /**
   * ArrTechWork findFirst
   */
  export type ArrTechWorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter, which ArrTechWork to fetch.
     */
    where?: ArrTechWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTechWorks to fetch.
     */
    orderBy?: ArrTechWorkOrderByWithRelationInput | ArrTechWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrTechWorks.
     */
    cursor?: ArrTechWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTechWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTechWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrTechWorks.
     */
    distinct?: ArrTechWorkScalarFieldEnum | ArrTechWorkScalarFieldEnum[]
  }

  /**
   * ArrTechWork findFirstOrThrow
   */
  export type ArrTechWorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter, which ArrTechWork to fetch.
     */
    where?: ArrTechWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTechWorks to fetch.
     */
    orderBy?: ArrTechWorkOrderByWithRelationInput | ArrTechWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrTechWorks.
     */
    cursor?: ArrTechWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTechWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTechWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrTechWorks.
     */
    distinct?: ArrTechWorkScalarFieldEnum | ArrTechWorkScalarFieldEnum[]
  }

  /**
   * ArrTechWork findMany
   */
  export type ArrTechWorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter, which ArrTechWorks to fetch.
     */
    where?: ArrTechWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrTechWorks to fetch.
     */
    orderBy?: ArrTechWorkOrderByWithRelationInput | ArrTechWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArrTechWorks.
     */
    cursor?: ArrTechWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrTechWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrTechWorks.
     */
    skip?: number
    distinct?: ArrTechWorkScalarFieldEnum | ArrTechWorkScalarFieldEnum[]
  }

  /**
   * ArrTechWork create
   */
  export type ArrTechWorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * The data needed to create a ArrTechWork.
     */
    data: XOR<ArrTechWorkCreateInput, ArrTechWorkUncheckedCreateInput>
  }

  /**
   * ArrTechWork createMany
   */
  export type ArrTechWorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArrTechWorks.
     */
    data: ArrTechWorkCreateManyInput | ArrTechWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArrTechWork createManyAndReturn
   */
  export type ArrTechWorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * The data used to create many ArrTechWorks.
     */
    data: ArrTechWorkCreateManyInput | ArrTechWorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrTechWork update
   */
  export type ArrTechWorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * The data needed to update a ArrTechWork.
     */
    data: XOR<ArrTechWorkUpdateInput, ArrTechWorkUncheckedUpdateInput>
    /**
     * Choose, which ArrTechWork to update.
     */
    where: ArrTechWorkWhereUniqueInput
  }

  /**
   * ArrTechWork updateMany
   */
  export type ArrTechWorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArrTechWorks.
     */
    data: XOR<ArrTechWorkUpdateManyMutationInput, ArrTechWorkUncheckedUpdateManyInput>
    /**
     * Filter which ArrTechWorks to update
     */
    where?: ArrTechWorkWhereInput
    /**
     * Limit how many ArrTechWorks to update.
     */
    limit?: number
  }

  /**
   * ArrTechWork updateManyAndReturn
   */
  export type ArrTechWorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * The data used to update ArrTechWorks.
     */
    data: XOR<ArrTechWorkUpdateManyMutationInput, ArrTechWorkUncheckedUpdateManyInput>
    /**
     * Filter which ArrTechWorks to update
     */
    where?: ArrTechWorkWhereInput
    /**
     * Limit how many ArrTechWorks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrTechWork upsert
   */
  export type ArrTechWorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * The filter to search for the ArrTechWork to update in case it exists.
     */
    where: ArrTechWorkWhereUniqueInput
    /**
     * In case the ArrTechWork found by the `where` argument doesn't exist, create a new ArrTechWork with this data.
     */
    create: XOR<ArrTechWorkCreateInput, ArrTechWorkUncheckedCreateInput>
    /**
     * In case the ArrTechWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrTechWorkUpdateInput, ArrTechWorkUncheckedUpdateInput>
  }

  /**
   * ArrTechWork delete
   */
  export type ArrTechWorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
    /**
     * Filter which ArrTechWork to delete.
     */
    where: ArrTechWorkWhereUniqueInput
  }

  /**
   * ArrTechWork deleteMany
   */
  export type ArrTechWorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrTechWorks to delete
     */
    where?: ArrTechWorkWhereInput
    /**
     * Limit how many ArrTechWorks to delete.
     */
    limit?: number
  }

  /**
   * ArrTechWork without action
   */
  export type ArrTechWorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrTechWork
     */
    select?: ArrTechWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrTechWork
     */
    omit?: ArrTechWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrTechWorkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    surname: 'surname',
    images: 'images',
    profession: 'profession',
    bio: 'bio',
    location: 'location',
    status: 'status',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    demo: 'demo',
    github: 'github',
    images: 'images',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TechScalarFieldEnum: {
    id: 'id',
    name: 'name',
    images: 'images',
    userId: 'userId'
  };

  export type TechScalarFieldEnum = (typeof TechScalarFieldEnum)[keyof typeof TechScalarFieldEnum]


  export const ArrTechScalarFieldEnum: {
    id: 'id',
    techstack: 'techstack',
    techId: 'techId'
  };

  export type ArrTechScalarFieldEnum = (typeof ArrTechScalarFieldEnum)[keyof typeof ArrTechScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    images: 'images',
    userId: 'userId'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const ArrDescScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    descriptionId: 'descriptionId'
  };

  export type ArrDescScalarFieldEnum = (typeof ArrDescScalarFieldEnum)[keyof typeof ArrDescScalarFieldEnum]


  export const ArrTechWorkScalarFieldEnum: {
    id: 'id',
    techstack: 'techstack',
    techId: 'techId'
  };

  export type ArrTechWorkScalarFieldEnum = (typeof ArrTechWorkScalarFieldEnum)[keyof typeof ArrTechWorkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Option'
   */
  export type EnumOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Option'>
    


  /**
   * Reference to a field of type 'Option[]'
   */
  export type ListEnumOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Option[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile?: ProfileListRelationFilter
    project?: ProjectListRelationFilter
    tech?: TechListRelationFilter
    work?: WorkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: ProfileOrderByRelationAggregateInput
    project?: ProjectOrderByRelationAggregateInput
    tech?: TechOrderByRelationAggregateInput
    work?: WorkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profile?: ProfileListRelationFilter
    project?: ProjectListRelationFilter
    tech?: TechListRelationFilter
    work?: WorkListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    surname?: StringFilter<"Profile"> | string
    images?: StringFilter<"Profile"> | string
    profession?: StringFilter<"Profile"> | string
    bio?: StringFilter<"Profile"> | string
    location?: StringFilter<"Profile"> | string
    status?: EnumOptionFilter<"Profile"> | $Enums.Option
    userId?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    surname?: SortOrder
    images?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    surname?: StringFilter<"Profile"> | string
    images?: StringFilter<"Profile"> | string
    profession?: StringFilter<"Profile"> | string
    bio?: StringFilter<"Profile"> | string
    location?: StringFilter<"Profile"> | string
    status?: EnumOptionFilter<"Profile"> | $Enums.Option
    userId?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    surname?: SortOrder
    images?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    surname?: StringWithAggregatesFilter<"Profile"> | string
    images?: StringWithAggregatesFilter<"Profile"> | string
    profession?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringWithAggregatesFilter<"Profile"> | string
    location?: StringWithAggregatesFilter<"Profile"> | string
    status?: EnumOptionWithAggregatesFilter<"Profile"> | $Enums.Option
    userId?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    demo?: StringNullableFilter<"Project"> | string | null
    github?: StringNullableFilter<"Project"> | string | null
    images?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    techstack?: ArrTechListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    images?: SortOrder
    userId?: SortOrder
    techstack?: ArrTechOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    demo?: StringNullableFilter<"Project"> | string | null
    github?: StringNullableFilter<"Project"> | string | null
    images?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    techstack?: ArrTechListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    images?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    demo?: StringNullableWithAggregatesFilter<"Project"> | string | null
    github?: StringNullableWithAggregatesFilter<"Project"> | string | null
    images?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type TechWhereInput = {
    AND?: TechWhereInput | TechWhereInput[]
    OR?: TechWhereInput[]
    NOT?: TechWhereInput | TechWhereInput[]
    id?: StringFilter<"Tech"> | string
    name?: StringFilter<"Tech"> | string
    images?: StringFilter<"Tech"> | string
    userId?: StringFilter<"Tech"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TechOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TechWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TechWhereInput | TechWhereInput[]
    OR?: TechWhereInput[]
    NOT?: TechWhereInput | TechWhereInput[]
    name?: StringFilter<"Tech"> | string
    images?: StringFilter<"Tech"> | string
    userId?: StringFilter<"Tech"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TechOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    _count?: TechCountOrderByAggregateInput
    _max?: TechMaxOrderByAggregateInput
    _min?: TechMinOrderByAggregateInput
  }

  export type TechScalarWhereWithAggregatesInput = {
    AND?: TechScalarWhereWithAggregatesInput | TechScalarWhereWithAggregatesInput[]
    OR?: TechScalarWhereWithAggregatesInput[]
    NOT?: TechScalarWhereWithAggregatesInput | TechScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tech"> | string
    name?: StringWithAggregatesFilter<"Tech"> | string
    images?: StringWithAggregatesFilter<"Tech"> | string
    userId?: StringWithAggregatesFilter<"Tech"> | string
  }

  export type ArrTechWhereInput = {
    AND?: ArrTechWhereInput | ArrTechWhereInput[]
    OR?: ArrTechWhereInput[]
    NOT?: ArrTechWhereInput | ArrTechWhereInput[]
    id?: StringFilter<"ArrTech"> | string
    techstack?: StringFilter<"ArrTech"> | string
    techId?: StringFilter<"ArrTech"> | string
    tech?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ArrTechOrderByWithRelationInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
    tech?: ProjectOrderByWithRelationInput
  }

  export type ArrTechWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArrTechWhereInput | ArrTechWhereInput[]
    OR?: ArrTechWhereInput[]
    NOT?: ArrTechWhereInput | ArrTechWhereInput[]
    techstack?: StringFilter<"ArrTech"> | string
    techId?: StringFilter<"ArrTech"> | string
    tech?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ArrTechOrderByWithAggregationInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
    _count?: ArrTechCountOrderByAggregateInput
    _max?: ArrTechMaxOrderByAggregateInput
    _min?: ArrTechMinOrderByAggregateInput
  }

  export type ArrTechScalarWhereWithAggregatesInput = {
    AND?: ArrTechScalarWhereWithAggregatesInput | ArrTechScalarWhereWithAggregatesInput[]
    OR?: ArrTechScalarWhereWithAggregatesInput[]
    NOT?: ArrTechScalarWhereWithAggregatesInput | ArrTechScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArrTech"> | string
    techstack?: StringWithAggregatesFilter<"ArrTech"> | string
    techId?: StringWithAggregatesFilter<"ArrTech"> | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    title?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    location?: StringFilter<"Work"> | string
    startDate?: StringFilter<"Work"> | string
    endDate?: StringFilter<"Work"> | string
    images?: StringFilter<"Work"> | string
    userId?: StringFilter<"Work"> | string
    description?: ArrDescListRelationFilter
    technology?: ArrTechWorkListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    description?: ArrDescOrderByRelationAggregateInput
    technology?: ArrTechWorkOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    title?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    location?: StringFilter<"Work"> | string
    startDate?: StringFilter<"Work"> | string
    endDate?: StringFilter<"Work"> | string
    images?: StringFilter<"Work"> | string
    userId?: StringFilter<"Work"> | string
    description?: ArrDescListRelationFilter
    technology?: ArrTechWorkListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    title?: StringWithAggregatesFilter<"Work"> | string
    company?: StringWithAggregatesFilter<"Work"> | string
    location?: StringWithAggregatesFilter<"Work"> | string
    startDate?: StringWithAggregatesFilter<"Work"> | string
    endDate?: StringWithAggregatesFilter<"Work"> | string
    images?: StringWithAggregatesFilter<"Work"> | string
    userId?: StringWithAggregatesFilter<"Work"> | string
  }

  export type ArrDescWhereInput = {
    AND?: ArrDescWhereInput | ArrDescWhereInput[]
    OR?: ArrDescWhereInput[]
    NOT?: ArrDescWhereInput | ArrDescWhereInput[]
    id?: StringFilter<"ArrDesc"> | string
    desc?: StringFilter<"ArrDesc"> | string
    descriptionId?: StringFilter<"ArrDesc"> | string
    description?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type ArrDescOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrder
    descriptionId?: SortOrder
    description?: WorkOrderByWithRelationInput
  }

  export type ArrDescWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArrDescWhereInput | ArrDescWhereInput[]
    OR?: ArrDescWhereInput[]
    NOT?: ArrDescWhereInput | ArrDescWhereInput[]
    desc?: StringFilter<"ArrDesc"> | string
    descriptionId?: StringFilter<"ArrDesc"> | string
    description?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type ArrDescOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrder
    descriptionId?: SortOrder
    _count?: ArrDescCountOrderByAggregateInput
    _max?: ArrDescMaxOrderByAggregateInput
    _min?: ArrDescMinOrderByAggregateInput
  }

  export type ArrDescScalarWhereWithAggregatesInput = {
    AND?: ArrDescScalarWhereWithAggregatesInput | ArrDescScalarWhereWithAggregatesInput[]
    OR?: ArrDescScalarWhereWithAggregatesInput[]
    NOT?: ArrDescScalarWhereWithAggregatesInput | ArrDescScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArrDesc"> | string
    desc?: StringWithAggregatesFilter<"ArrDesc"> | string
    descriptionId?: StringWithAggregatesFilter<"ArrDesc"> | string
  }

  export type ArrTechWorkWhereInput = {
    AND?: ArrTechWorkWhereInput | ArrTechWorkWhereInput[]
    OR?: ArrTechWorkWhereInput[]
    NOT?: ArrTechWorkWhereInput | ArrTechWorkWhereInput[]
    id?: StringFilter<"ArrTechWork"> | string
    techstack?: StringFilter<"ArrTechWork"> | string
    techId?: StringFilter<"ArrTechWork"> | string
    tech?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type ArrTechWorkOrderByWithRelationInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
    tech?: WorkOrderByWithRelationInput
  }

  export type ArrTechWorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArrTechWorkWhereInput | ArrTechWorkWhereInput[]
    OR?: ArrTechWorkWhereInput[]
    NOT?: ArrTechWorkWhereInput | ArrTechWorkWhereInput[]
    techstack?: StringFilter<"ArrTechWork"> | string
    techId?: StringFilter<"ArrTechWork"> | string
    tech?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type ArrTechWorkOrderByWithAggregationInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
    _count?: ArrTechWorkCountOrderByAggregateInput
    _max?: ArrTechWorkMaxOrderByAggregateInput
    _min?: ArrTechWorkMinOrderByAggregateInput
  }

  export type ArrTechWorkScalarWhereWithAggregatesInput = {
    AND?: ArrTechWorkScalarWhereWithAggregatesInput | ArrTechWorkScalarWhereWithAggregatesInput[]
    OR?: ArrTechWorkScalarWhereWithAggregatesInput[]
    NOT?: ArrTechWorkScalarWhereWithAggregatesInput | ArrTechWorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArrTechWork"> | string
    techstack?: StringWithAggregatesFilter<"ArrTechWork"> | string
    techId?: StringWithAggregatesFilter<"ArrTechWork"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileCreateNestedManyWithoutUserInput
    project?: ProjectCreateNestedManyWithoutUserInput
    tech?: TechCreateNestedManyWithoutUserInput
    work?: WorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tech?: TechUncheckedCreateNestedManyWithoutUserInput
    work?: WorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    project?: ProjectUpdateManyWithoutUserNestedInput
    tech?: TechUpdateManyWithoutUserNestedInput
    work?: WorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tech?: TechUncheckedUpdateManyWithoutUserNestedInput
    work?: WorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
    userId: string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
    userId: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    techstack?: ArrTechCreateNestedManyWithoutTechInput
    user: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    userId: string
    techstack?: ArrTechUncheckedCreateNestedManyWithoutTechInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    techstack?: ArrTechUpdateManyWithoutTechNestedInput
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    techstack?: ArrTechUncheckedUpdateManyWithoutTechNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TechCreateInput = {
    id?: string
    name: string
    images: string
    user: UserCreateNestedOneWithoutTechInput
  }

  export type TechUncheckedCreateInput = {
    id?: string
    name: string
    images: string
    userId: string
  }

  export type TechUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTechNestedInput
  }

  export type TechUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TechCreateManyInput = {
    id?: string
    name: string
    images: string
    userId: string
  }

  export type TechUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type TechUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechCreateInput = {
    id?: string
    techstack: string
    tech: ProjectCreateNestedOneWithoutTechstackInput
  }

  export type ArrTechUncheckedCreateInput = {
    id?: string
    techstack: string
    techId: string
  }

  export type ArrTechUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    tech?: ProjectUpdateOneRequiredWithoutTechstackNestedInput
  }

  export type ArrTechUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    techId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechCreateManyInput = {
    id?: string
    techstack: string
    techId: string
  }

  export type ArrTechUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    techId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCreateInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    description?: ArrDescCreateNestedManyWithoutDescriptionInput
    technology?: ArrTechWorkCreateNestedManyWithoutTechInput
    user: UserCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    userId: string
    description?: ArrDescUncheckedCreateNestedManyWithoutDescriptionInput
    technology?: ArrTechWorkUncheckedCreateNestedManyWithoutTechInput
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUpdateManyWithoutDescriptionNestedInput
    technology?: ArrTechWorkUpdateManyWithoutTechNestedInput
    user?: UserUpdateOneRequiredWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUncheckedUpdateManyWithoutDescriptionNestedInput
    technology?: ArrTechWorkUncheckedUpdateManyWithoutTechNestedInput
  }

  export type WorkCreateManyInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    userId: string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescCreateInput = {
    id?: string
    desc: string
    description: WorkCreateNestedOneWithoutDescriptionInput
  }

  export type ArrDescUncheckedCreateInput = {
    id?: string
    desc: string
    descriptionId: string
  }

  export type ArrDescUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    description?: WorkUpdateOneRequiredWithoutDescriptionNestedInput
  }

  export type ArrDescUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    descriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescCreateManyInput = {
    id?: string
    desc: string
    descriptionId: string
  }

  export type ArrDescUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    descriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkCreateInput = {
    id?: string
    techstack: string
    tech: WorkCreateNestedOneWithoutTechnologyInput
  }

  export type ArrTechWorkUncheckedCreateInput = {
    id?: string
    techstack: string
    techId: string
  }

  export type ArrTechWorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    tech?: WorkUpdateOneRequiredWithoutTechnologyNestedInput
  }

  export type ArrTechWorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    techId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkCreateManyInput = {
    id?: string
    techstack: string
    techId: string
  }

  export type ArrTechWorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
    techId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TechListRelationFilter = {
    every?: TechWhereInput
    some?: TechWhereInput
    none?: TechWhereInput
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Option | EnumOptionFieldRefInput<$PrismaModel>
    in?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionFilter<$PrismaModel> | $Enums.Option
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    images?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    images?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    images?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type EnumOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Option | EnumOptionFieldRefInput<$PrismaModel>
    in?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionWithAggregatesFilter<$PrismaModel> | $Enums.Option
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOptionFilter<$PrismaModel>
    _max?: NestedEnumOptionFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArrTechListRelationFilter = {
    every?: ArrTechWhereInput
    some?: ArrTechWhereInput
    none?: ArrTechWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArrTechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrder
    github?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrder
    github?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    demo?: SortOrder
    github?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TechCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type TechMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type TechMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ArrTechCountOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ArrTechMaxOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ArrTechMinOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ArrDescListRelationFilter = {
    every?: ArrDescWhereInput
    some?: ArrDescWhereInput
    none?: ArrDescWhereInput
  }

  export type ArrTechWorkListRelationFilter = {
    every?: ArrTechWorkWhereInput
    some?: ArrTechWorkWhereInput
    none?: ArrTechWorkWhereInput
  }

  export type ArrDescOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArrTechWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    images?: SortOrder
    userId?: SortOrder
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type ArrDescCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    descriptionId?: SortOrder
  }

  export type ArrDescMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    descriptionId?: SortOrder
  }

  export type ArrDescMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    descriptionId?: SortOrder
  }

  export type ArrTechWorkCountOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ArrTechWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ArrTechWorkMinOrderByAggregateInput = {
    id?: SortOrder
    techstack?: SortOrder
    techId?: SortOrder
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TechCreateNestedManyWithoutUserInput = {
    create?: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput> | TechCreateWithoutUserInput[] | TechUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TechCreateOrConnectWithoutUserInput | TechCreateOrConnectWithoutUserInput[]
    createMany?: TechCreateManyUserInputEnvelope
    connect?: TechWhereUniqueInput | TechWhereUniqueInput[]
  }

  export type WorkCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TechUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput> | TechCreateWithoutUserInput[] | TechUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TechCreateOrConnectWithoutUserInput | TechCreateOrConnectWithoutUserInput[]
    createMany?: TechCreateManyUserInputEnvelope
    connect?: TechWhereUniqueInput | TechWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TechUpdateManyWithoutUserNestedInput = {
    create?: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput> | TechCreateWithoutUserInput[] | TechUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TechCreateOrConnectWithoutUserInput | TechCreateOrConnectWithoutUserInput[]
    upsert?: TechUpsertWithWhereUniqueWithoutUserInput | TechUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TechCreateManyUserInputEnvelope
    set?: TechWhereUniqueInput | TechWhereUniqueInput[]
    disconnect?: TechWhereUniqueInput | TechWhereUniqueInput[]
    delete?: TechWhereUniqueInput | TechWhereUniqueInput[]
    connect?: TechWhereUniqueInput | TechWhereUniqueInput[]
    update?: TechUpdateWithWhereUniqueWithoutUserInput | TechUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TechUpdateManyWithWhereWithoutUserInput | TechUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TechScalarWhereInput | TechScalarWhereInput[]
  }

  export type WorkUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutUserInput | WorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutUserInput | WorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutUserInput | WorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | ProfileCreateWithoutUserInput[] | ProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | ProfileCreateOrConnectWithoutUserInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserInput | ProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserInput | ProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserInput | ProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TechUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput> | TechCreateWithoutUserInput[] | TechUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TechCreateOrConnectWithoutUserInput | TechCreateOrConnectWithoutUserInput[]
    upsert?: TechUpsertWithWhereUniqueWithoutUserInput | TechUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TechCreateManyUserInputEnvelope
    set?: TechWhereUniqueInput | TechWhereUniqueInput[]
    disconnect?: TechWhereUniqueInput | TechWhereUniqueInput[]
    delete?: TechWhereUniqueInput | TechWhereUniqueInput[]
    connect?: TechWhereUniqueInput | TechWhereUniqueInput[]
    update?: TechUpdateWithWhereUniqueWithoutUserInput | TechUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TechUpdateManyWithWhereWithoutUserInput | TechUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TechScalarWhereInput | TechScalarWhereInput[]
  }

  export type WorkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutUserInput | WorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutUserInput | WorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutUserInput | WorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOptionFieldUpdateOperationsInput = {
    set?: $Enums.Option
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ArrTechCreateNestedManyWithoutTechInput = {
    create?: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput> | ArrTechCreateWithoutTechInput[] | ArrTechUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechCreateOrConnectWithoutTechInput | ArrTechCreateOrConnectWithoutTechInput[]
    createMany?: ArrTechCreateManyTechInputEnvelope
    connect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ArrTechUncheckedCreateNestedManyWithoutTechInput = {
    create?: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput> | ArrTechCreateWithoutTechInput[] | ArrTechUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechCreateOrConnectWithoutTechInput | ArrTechCreateOrConnectWithoutTechInput[]
    createMany?: ArrTechCreateManyTechInputEnvelope
    connect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ArrTechUpdateManyWithoutTechNestedInput = {
    create?: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput> | ArrTechCreateWithoutTechInput[] | ArrTechUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechCreateOrConnectWithoutTechInput | ArrTechCreateOrConnectWithoutTechInput[]
    upsert?: ArrTechUpsertWithWhereUniqueWithoutTechInput | ArrTechUpsertWithWhereUniqueWithoutTechInput[]
    createMany?: ArrTechCreateManyTechInputEnvelope
    set?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    disconnect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    delete?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    connect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    update?: ArrTechUpdateWithWhereUniqueWithoutTechInput | ArrTechUpdateWithWhereUniqueWithoutTechInput[]
    updateMany?: ArrTechUpdateManyWithWhereWithoutTechInput | ArrTechUpdateManyWithWhereWithoutTechInput[]
    deleteMany?: ArrTechScalarWhereInput | ArrTechScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ArrTechUncheckedUpdateManyWithoutTechNestedInput = {
    create?: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput> | ArrTechCreateWithoutTechInput[] | ArrTechUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechCreateOrConnectWithoutTechInput | ArrTechCreateOrConnectWithoutTechInput[]
    upsert?: ArrTechUpsertWithWhereUniqueWithoutTechInput | ArrTechUpsertWithWhereUniqueWithoutTechInput[]
    createMany?: ArrTechCreateManyTechInputEnvelope
    set?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    disconnect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    delete?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    connect?: ArrTechWhereUniqueInput | ArrTechWhereUniqueInput[]
    update?: ArrTechUpdateWithWhereUniqueWithoutTechInput | ArrTechUpdateWithWhereUniqueWithoutTechInput[]
    updateMany?: ArrTechUpdateManyWithWhereWithoutTechInput | ArrTechUpdateManyWithWhereWithoutTechInput[]
    deleteMany?: ArrTechScalarWhereInput | ArrTechScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTechInput = {
    create?: XOR<UserCreateWithoutTechInput, UserUncheckedCreateWithoutTechInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTechNestedInput = {
    create?: XOR<UserCreateWithoutTechInput, UserUncheckedCreateWithoutTechInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechInput
    upsert?: UserUpsertWithoutTechInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTechInput, UserUpdateWithoutTechInput>, UserUncheckedUpdateWithoutTechInput>
  }

  export type ProjectCreateNestedOneWithoutTechstackInput = {
    create?: XOR<ProjectCreateWithoutTechstackInput, ProjectUncheckedCreateWithoutTechstackInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechstackInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechstackNestedInput = {
    create?: XOR<ProjectCreateWithoutTechstackInput, ProjectUncheckedCreateWithoutTechstackInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechstackInput
    upsert?: ProjectUpsertWithoutTechstackInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTechstackInput, ProjectUpdateWithoutTechstackInput>, ProjectUncheckedUpdateWithoutTechstackInput>
  }

  export type ArrDescCreateNestedManyWithoutDescriptionInput = {
    create?: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput> | ArrDescCreateWithoutDescriptionInput[] | ArrDescUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: ArrDescCreateOrConnectWithoutDescriptionInput | ArrDescCreateOrConnectWithoutDescriptionInput[]
    createMany?: ArrDescCreateManyDescriptionInputEnvelope
    connect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
  }

  export type ArrTechWorkCreateNestedManyWithoutTechInput = {
    create?: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput> | ArrTechWorkCreateWithoutTechInput[] | ArrTechWorkUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechWorkCreateOrConnectWithoutTechInput | ArrTechWorkCreateOrConnectWithoutTechInput[]
    createMany?: ArrTechWorkCreateManyTechInputEnvelope
    connect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWorkInput = {
    create?: XOR<UserCreateWithoutWorkInput, UserUncheckedCreateWithoutWorkInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkInput
    connect?: UserWhereUniqueInput
  }

  export type ArrDescUncheckedCreateNestedManyWithoutDescriptionInput = {
    create?: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput> | ArrDescCreateWithoutDescriptionInput[] | ArrDescUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: ArrDescCreateOrConnectWithoutDescriptionInput | ArrDescCreateOrConnectWithoutDescriptionInput[]
    createMany?: ArrDescCreateManyDescriptionInputEnvelope
    connect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
  }

  export type ArrTechWorkUncheckedCreateNestedManyWithoutTechInput = {
    create?: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput> | ArrTechWorkCreateWithoutTechInput[] | ArrTechWorkUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechWorkCreateOrConnectWithoutTechInput | ArrTechWorkCreateOrConnectWithoutTechInput[]
    createMany?: ArrTechWorkCreateManyTechInputEnvelope
    connect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
  }

  export type ArrDescUpdateManyWithoutDescriptionNestedInput = {
    create?: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput> | ArrDescCreateWithoutDescriptionInput[] | ArrDescUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: ArrDescCreateOrConnectWithoutDescriptionInput | ArrDescCreateOrConnectWithoutDescriptionInput[]
    upsert?: ArrDescUpsertWithWhereUniqueWithoutDescriptionInput | ArrDescUpsertWithWhereUniqueWithoutDescriptionInput[]
    createMany?: ArrDescCreateManyDescriptionInputEnvelope
    set?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    disconnect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    delete?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    connect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    update?: ArrDescUpdateWithWhereUniqueWithoutDescriptionInput | ArrDescUpdateWithWhereUniqueWithoutDescriptionInput[]
    updateMany?: ArrDescUpdateManyWithWhereWithoutDescriptionInput | ArrDescUpdateManyWithWhereWithoutDescriptionInput[]
    deleteMany?: ArrDescScalarWhereInput | ArrDescScalarWhereInput[]
  }

  export type ArrTechWorkUpdateManyWithoutTechNestedInput = {
    create?: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput> | ArrTechWorkCreateWithoutTechInput[] | ArrTechWorkUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechWorkCreateOrConnectWithoutTechInput | ArrTechWorkCreateOrConnectWithoutTechInput[]
    upsert?: ArrTechWorkUpsertWithWhereUniqueWithoutTechInput | ArrTechWorkUpsertWithWhereUniqueWithoutTechInput[]
    createMany?: ArrTechWorkCreateManyTechInputEnvelope
    set?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    disconnect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    delete?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    connect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    update?: ArrTechWorkUpdateWithWhereUniqueWithoutTechInput | ArrTechWorkUpdateWithWhereUniqueWithoutTechInput[]
    updateMany?: ArrTechWorkUpdateManyWithWhereWithoutTechInput | ArrTechWorkUpdateManyWithWhereWithoutTechInput[]
    deleteMany?: ArrTechWorkScalarWhereInput | ArrTechWorkScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkNestedInput = {
    create?: XOR<UserCreateWithoutWorkInput, UserUncheckedCreateWithoutWorkInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkInput
    upsert?: UserUpsertWithoutWorkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkInput, UserUpdateWithoutWorkInput>, UserUncheckedUpdateWithoutWorkInput>
  }

  export type ArrDescUncheckedUpdateManyWithoutDescriptionNestedInput = {
    create?: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput> | ArrDescCreateWithoutDescriptionInput[] | ArrDescUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: ArrDescCreateOrConnectWithoutDescriptionInput | ArrDescCreateOrConnectWithoutDescriptionInput[]
    upsert?: ArrDescUpsertWithWhereUniqueWithoutDescriptionInput | ArrDescUpsertWithWhereUniqueWithoutDescriptionInput[]
    createMany?: ArrDescCreateManyDescriptionInputEnvelope
    set?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    disconnect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    delete?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    connect?: ArrDescWhereUniqueInput | ArrDescWhereUniqueInput[]
    update?: ArrDescUpdateWithWhereUniqueWithoutDescriptionInput | ArrDescUpdateWithWhereUniqueWithoutDescriptionInput[]
    updateMany?: ArrDescUpdateManyWithWhereWithoutDescriptionInput | ArrDescUpdateManyWithWhereWithoutDescriptionInput[]
    deleteMany?: ArrDescScalarWhereInput | ArrDescScalarWhereInput[]
  }

  export type ArrTechWorkUncheckedUpdateManyWithoutTechNestedInput = {
    create?: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput> | ArrTechWorkCreateWithoutTechInput[] | ArrTechWorkUncheckedCreateWithoutTechInput[]
    connectOrCreate?: ArrTechWorkCreateOrConnectWithoutTechInput | ArrTechWorkCreateOrConnectWithoutTechInput[]
    upsert?: ArrTechWorkUpsertWithWhereUniqueWithoutTechInput | ArrTechWorkUpsertWithWhereUniqueWithoutTechInput[]
    createMany?: ArrTechWorkCreateManyTechInputEnvelope
    set?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    disconnect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    delete?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    connect?: ArrTechWorkWhereUniqueInput | ArrTechWorkWhereUniqueInput[]
    update?: ArrTechWorkUpdateWithWhereUniqueWithoutTechInput | ArrTechWorkUpdateWithWhereUniqueWithoutTechInput[]
    updateMany?: ArrTechWorkUpdateManyWithWhereWithoutTechInput | ArrTechWorkUpdateManyWithWhereWithoutTechInput[]
    deleteMany?: ArrTechWorkScalarWhereInput | ArrTechWorkScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutDescriptionInput = {
    create?: XOR<WorkCreateWithoutDescriptionInput, WorkUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: WorkCreateOrConnectWithoutDescriptionInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutDescriptionNestedInput = {
    create?: XOR<WorkCreateWithoutDescriptionInput, WorkUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: WorkCreateOrConnectWithoutDescriptionInput
    upsert?: WorkUpsertWithoutDescriptionInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutDescriptionInput, WorkUpdateWithoutDescriptionInput>, WorkUncheckedUpdateWithoutDescriptionInput>
  }

  export type WorkCreateNestedOneWithoutTechnologyInput = {
    create?: XOR<WorkCreateWithoutTechnologyInput, WorkUncheckedCreateWithoutTechnologyInput>
    connectOrCreate?: WorkCreateOrConnectWithoutTechnologyInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutTechnologyNestedInput = {
    create?: XOR<WorkCreateWithoutTechnologyInput, WorkUncheckedCreateWithoutTechnologyInput>
    connectOrCreate?: WorkCreateOrConnectWithoutTechnologyInput
    upsert?: WorkUpsertWithoutTechnologyInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutTechnologyInput, WorkUpdateWithoutTechnologyInput>, WorkUncheckedUpdateWithoutTechnologyInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Option | EnumOptionFieldRefInput<$PrismaModel>
    in?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionFilter<$PrismaModel> | $Enums.Option
  }

  export type NestedEnumOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Option | EnumOptionFieldRefInput<$PrismaModel>
    in?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Option[] | ListEnumOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumOptionWithAggregatesFilter<$PrismaModel> | $Enums.Option
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOptionFilter<$PrismaModel>
    _max?: NestedEnumOptionFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: ProfileCreateManyUserInput | ProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    techstack?: ArrTechCreateNestedManyWithoutTechInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    techstack?: ArrTechUncheckedCreateNestedManyWithoutTechInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TechCreateWithoutUserInput = {
    id?: string
    name: string
    images: string
  }

  export type TechUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    images: string
  }

  export type TechCreateOrConnectWithoutUserInput = {
    where: TechWhereUniqueInput
    create: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput>
  }

  export type TechCreateManyUserInputEnvelope = {
    data: TechCreateManyUserInput | TechCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkCreateWithoutUserInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    description?: ArrDescCreateNestedManyWithoutDescriptionInput
    technology?: ArrTechWorkCreateNestedManyWithoutTechInput
  }

  export type WorkUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    description?: ArrDescUncheckedCreateNestedManyWithoutDescriptionInput
    technology?: ArrTechWorkUncheckedCreateNestedManyWithoutTechInput
  }

  export type WorkCreateOrConnectWithoutUserInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput>
  }

  export type WorkCreateManyUserInputEnvelope = {
    data: WorkCreateManyUserInput | WorkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: StringFilter<"Profile"> | string
    surname?: StringFilter<"Profile"> | string
    images?: StringFilter<"Profile"> | string
    profession?: StringFilter<"Profile"> | string
    bio?: StringFilter<"Profile"> | string
    location?: StringFilter<"Profile"> | string
    status?: EnumOptionFilter<"Profile"> | $Enums.Option
    userId?: StringFilter<"Profile"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    demo?: StringNullableFilter<"Project"> | string | null
    github?: StringNullableFilter<"Project"> | string | null
    images?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
  }

  export type TechUpsertWithWhereUniqueWithoutUserInput = {
    where: TechWhereUniqueInput
    update: XOR<TechUpdateWithoutUserInput, TechUncheckedUpdateWithoutUserInput>
    create: XOR<TechCreateWithoutUserInput, TechUncheckedCreateWithoutUserInput>
  }

  export type TechUpdateWithWhereUniqueWithoutUserInput = {
    where: TechWhereUniqueInput
    data: XOR<TechUpdateWithoutUserInput, TechUncheckedUpdateWithoutUserInput>
  }

  export type TechUpdateManyWithWhereWithoutUserInput = {
    where: TechScalarWhereInput
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyWithoutUserInput>
  }

  export type TechScalarWhereInput = {
    AND?: TechScalarWhereInput | TechScalarWhereInput[]
    OR?: TechScalarWhereInput[]
    NOT?: TechScalarWhereInput | TechScalarWhereInput[]
    id?: StringFilter<"Tech"> | string
    name?: StringFilter<"Tech"> | string
    images?: StringFilter<"Tech"> | string
    userId?: StringFilter<"Tech"> | string
  }

  export type WorkUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutUserInput, WorkUncheckedUpdateWithoutUserInput>
    create: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutUserInput, WorkUncheckedUpdateWithoutUserInput>
  }

  export type WorkUpdateManyWithWhereWithoutUserInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: StringFilter<"Work"> | string
    title?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    location?: StringFilter<"Work"> | string
    startDate?: StringFilter<"Work"> | string
    endDate?: StringFilter<"Work"> | string
    images?: StringFilter<"Work"> | string
    userId?: StringFilter<"Work"> | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    email: string
    password: string
    project?: ProjectCreateNestedManyWithoutUserInput
    tech?: TechCreateNestedManyWithoutUserInput
    work?: WorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    email: string
    password: string
    project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tech?: TechUncheckedCreateNestedManyWithoutUserInput
    work?: WorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateManyWithoutUserNestedInput
    tech?: TechUpdateManyWithoutUserNestedInput
    work?: WorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tech?: TechUncheckedUpdateManyWithoutUserNestedInput
    work?: WorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArrTechCreateWithoutTechInput = {
    id?: string
    techstack: string
  }

  export type ArrTechUncheckedCreateWithoutTechInput = {
    id?: string
    techstack: string
  }

  export type ArrTechCreateOrConnectWithoutTechInput = {
    where: ArrTechWhereUniqueInput
    create: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput>
  }

  export type ArrTechCreateManyTechInputEnvelope = {
    data: ArrTechCreateManyTechInput | ArrTechCreateManyTechInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileCreateNestedManyWithoutUserInput
    tech?: TechCreateNestedManyWithoutUserInput
    work?: WorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    tech?: TechUncheckedCreateNestedManyWithoutUserInput
    work?: WorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ArrTechUpsertWithWhereUniqueWithoutTechInput = {
    where: ArrTechWhereUniqueInput
    update: XOR<ArrTechUpdateWithoutTechInput, ArrTechUncheckedUpdateWithoutTechInput>
    create: XOR<ArrTechCreateWithoutTechInput, ArrTechUncheckedCreateWithoutTechInput>
  }

  export type ArrTechUpdateWithWhereUniqueWithoutTechInput = {
    where: ArrTechWhereUniqueInput
    data: XOR<ArrTechUpdateWithoutTechInput, ArrTechUncheckedUpdateWithoutTechInput>
  }

  export type ArrTechUpdateManyWithWhereWithoutTechInput = {
    where: ArrTechScalarWhereInput
    data: XOR<ArrTechUpdateManyMutationInput, ArrTechUncheckedUpdateManyWithoutTechInput>
  }

  export type ArrTechScalarWhereInput = {
    AND?: ArrTechScalarWhereInput | ArrTechScalarWhereInput[]
    OR?: ArrTechScalarWhereInput[]
    NOT?: ArrTechScalarWhereInput | ArrTechScalarWhereInput[]
    id?: StringFilter<"ArrTech"> | string
    techstack?: StringFilter<"ArrTech"> | string
    techId?: StringFilter<"ArrTech"> | string
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    tech?: TechUpdateManyWithoutUserNestedInput
    work?: WorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    tech?: TechUncheckedUpdateManyWithoutUserNestedInput
    work?: WorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTechInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileCreateNestedManyWithoutUserInput
    project?: ProjectCreateNestedManyWithoutUserInput
    work?: WorkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    work?: WorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechInput, UserUncheckedCreateWithoutTechInput>
  }

  export type UserUpsertWithoutTechInput = {
    update: XOR<UserUpdateWithoutTechInput, UserUncheckedUpdateWithoutTechInput>
    create: XOR<UserCreateWithoutTechInput, UserUncheckedCreateWithoutTechInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTechInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTechInput, UserUncheckedUpdateWithoutTechInput>
  }

  export type UserUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    project?: ProjectUpdateManyWithoutUserNestedInput
    work?: WorkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    work?: WorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutTechstackInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    user: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTechstackInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
    userId: string
  }

  export type ProjectCreateOrConnectWithoutTechstackInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechstackInput, ProjectUncheckedCreateWithoutTechstackInput>
  }

  export type ProjectUpsertWithoutTechstackInput = {
    update: XOR<ProjectUpdateWithoutTechstackInput, ProjectUncheckedUpdateWithoutTechstackInput>
    create: XOR<ProjectCreateWithoutTechstackInput, ProjectUncheckedCreateWithoutTechstackInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechstackInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechstackInput, ProjectUncheckedUpdateWithoutTechstackInput>
  }

  export type ProjectUpdateWithoutTechstackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechstackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescCreateWithoutDescriptionInput = {
    id?: string
    desc: string
  }

  export type ArrDescUncheckedCreateWithoutDescriptionInput = {
    id?: string
    desc: string
  }

  export type ArrDescCreateOrConnectWithoutDescriptionInput = {
    where: ArrDescWhereUniqueInput
    create: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput>
  }

  export type ArrDescCreateManyDescriptionInputEnvelope = {
    data: ArrDescCreateManyDescriptionInput | ArrDescCreateManyDescriptionInput[]
    skipDuplicates?: boolean
  }

  export type ArrTechWorkCreateWithoutTechInput = {
    id?: string
    techstack: string
  }

  export type ArrTechWorkUncheckedCreateWithoutTechInput = {
    id?: string
    techstack: string
  }

  export type ArrTechWorkCreateOrConnectWithoutTechInput = {
    where: ArrTechWorkWhereUniqueInput
    create: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput>
  }

  export type ArrTechWorkCreateManyTechInputEnvelope = {
    data: ArrTechWorkCreateManyTechInput | ArrTechWorkCreateManyTechInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWorkInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileCreateNestedManyWithoutUserInput
    project?: ProjectCreateNestedManyWithoutUserInput
    tech?: TechCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkInput = {
    id?: string
    username: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tech?: TechUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkInput, UserUncheckedCreateWithoutWorkInput>
  }

  export type ArrDescUpsertWithWhereUniqueWithoutDescriptionInput = {
    where: ArrDescWhereUniqueInput
    update: XOR<ArrDescUpdateWithoutDescriptionInput, ArrDescUncheckedUpdateWithoutDescriptionInput>
    create: XOR<ArrDescCreateWithoutDescriptionInput, ArrDescUncheckedCreateWithoutDescriptionInput>
  }

  export type ArrDescUpdateWithWhereUniqueWithoutDescriptionInput = {
    where: ArrDescWhereUniqueInput
    data: XOR<ArrDescUpdateWithoutDescriptionInput, ArrDescUncheckedUpdateWithoutDescriptionInput>
  }

  export type ArrDescUpdateManyWithWhereWithoutDescriptionInput = {
    where: ArrDescScalarWhereInput
    data: XOR<ArrDescUpdateManyMutationInput, ArrDescUncheckedUpdateManyWithoutDescriptionInput>
  }

  export type ArrDescScalarWhereInput = {
    AND?: ArrDescScalarWhereInput | ArrDescScalarWhereInput[]
    OR?: ArrDescScalarWhereInput[]
    NOT?: ArrDescScalarWhereInput | ArrDescScalarWhereInput[]
    id?: StringFilter<"ArrDesc"> | string
    desc?: StringFilter<"ArrDesc"> | string
    descriptionId?: StringFilter<"ArrDesc"> | string
  }

  export type ArrTechWorkUpsertWithWhereUniqueWithoutTechInput = {
    where: ArrTechWorkWhereUniqueInput
    update: XOR<ArrTechWorkUpdateWithoutTechInput, ArrTechWorkUncheckedUpdateWithoutTechInput>
    create: XOR<ArrTechWorkCreateWithoutTechInput, ArrTechWorkUncheckedCreateWithoutTechInput>
  }

  export type ArrTechWorkUpdateWithWhereUniqueWithoutTechInput = {
    where: ArrTechWorkWhereUniqueInput
    data: XOR<ArrTechWorkUpdateWithoutTechInput, ArrTechWorkUncheckedUpdateWithoutTechInput>
  }

  export type ArrTechWorkUpdateManyWithWhereWithoutTechInput = {
    where: ArrTechWorkScalarWhereInput
    data: XOR<ArrTechWorkUpdateManyMutationInput, ArrTechWorkUncheckedUpdateManyWithoutTechInput>
  }

  export type ArrTechWorkScalarWhereInput = {
    AND?: ArrTechWorkScalarWhereInput | ArrTechWorkScalarWhereInput[]
    OR?: ArrTechWorkScalarWhereInput[]
    NOT?: ArrTechWorkScalarWhereInput | ArrTechWorkScalarWhereInput[]
    id?: StringFilter<"ArrTechWork"> | string
    techstack?: StringFilter<"ArrTechWork"> | string
    techId?: StringFilter<"ArrTechWork"> | string
  }

  export type UserUpsertWithoutWorkInput = {
    update: XOR<UserUpdateWithoutWorkInput, UserUncheckedUpdateWithoutWorkInput>
    create: XOR<UserCreateWithoutWorkInput, UserUncheckedCreateWithoutWorkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkInput, UserUncheckedUpdateWithoutWorkInput>
  }

  export type UserUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateManyWithoutUserNestedInput
    project?: ProjectUpdateManyWithoutUserNestedInput
    tech?: TechUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tech?: TechUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkCreateWithoutDescriptionInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    technology?: ArrTechWorkCreateNestedManyWithoutTechInput
    user: UserCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutDescriptionInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    userId: string
    technology?: ArrTechWorkUncheckedCreateNestedManyWithoutTechInput
  }

  export type WorkCreateOrConnectWithoutDescriptionInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutDescriptionInput, WorkUncheckedCreateWithoutDescriptionInput>
  }

  export type WorkUpsertWithoutDescriptionInput = {
    update: XOR<WorkUpdateWithoutDescriptionInput, WorkUncheckedUpdateWithoutDescriptionInput>
    create: XOR<WorkCreateWithoutDescriptionInput, WorkUncheckedCreateWithoutDescriptionInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutDescriptionInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutDescriptionInput, WorkUncheckedUpdateWithoutDescriptionInput>
  }

  export type WorkUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    technology?: ArrTechWorkUpdateManyWithoutTechNestedInput
    user?: UserUpdateOneRequiredWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    technology?: ArrTechWorkUncheckedUpdateManyWithoutTechNestedInput
  }

  export type WorkCreateWithoutTechnologyInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    description?: ArrDescCreateNestedManyWithoutDescriptionInput
    user: UserCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutTechnologyInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
    userId: string
    description?: ArrDescUncheckedCreateNestedManyWithoutDescriptionInput
  }

  export type WorkCreateOrConnectWithoutTechnologyInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutTechnologyInput, WorkUncheckedCreateWithoutTechnologyInput>
  }

  export type WorkUpsertWithoutTechnologyInput = {
    update: XOR<WorkUpdateWithoutTechnologyInput, WorkUncheckedUpdateWithoutTechnologyInput>
    create: XOR<WorkCreateWithoutTechnologyInput, WorkUncheckedCreateWithoutTechnologyInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutTechnologyInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutTechnologyInput, WorkUncheckedUpdateWithoutTechnologyInput>
  }

  export type WorkUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUpdateManyWithoutDescriptionNestedInput
    user?: UserUpdateOneRequiredWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutTechnologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUncheckedUpdateManyWithoutDescriptionNestedInput
  }

  export type ProfileCreateManyUserInput = {
    id?: string
    surname: string
    images: string
    profession: string
    bio: string
    location: string
    status: $Enums.Option
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    description: string
    demo?: string | null
    github?: string | null
    images: string
  }

  export type TechCreateManyUserInput = {
    id?: string
    name: string
    images: string
  }

  export type WorkCreateManyUserInput = {
    id?: string
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    images: string
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
  }

  export type ProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumOptionFieldUpdateOperationsInput | $Enums.Option
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    techstack?: ArrTechUpdateManyWithoutTechNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    techstack?: ArrTechUncheckedUpdateManyWithoutTechNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    demo?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
  }

  export type TechUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type TechUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type TechUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type WorkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUpdateManyWithoutDescriptionNestedInput
    technology?: ArrTechWorkUpdateManyWithoutTechNestedInput
  }

  export type WorkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    description?: ArrDescUncheckedUpdateManyWithoutDescriptionNestedInput
    technology?: ArrTechWorkUncheckedUpdateManyWithoutTechNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechCreateManyTechInput = {
    id?: string
    techstack: string
  }

  export type ArrTechUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechUncheckedUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechUncheckedUpdateManyWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescCreateManyDescriptionInput = {
    id?: string
    desc: string
  }

  export type ArrTechWorkCreateManyTechInput = {
    id?: string
    techstack: string
  }

  export type ArrDescUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescUncheckedUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type ArrDescUncheckedUpdateManyWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkUncheckedUpdateWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }

  export type ArrTechWorkUncheckedUpdateManyWithoutTechInput = {
    id?: StringFieldUpdateOperationsInput | string
    techstack?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
////////////////////////////////////////////////////////////////
//////////////////// Begin Office namespace ////////////////////
////////////////////////////////////////////////////////////////

export declare namespace Office {
    /**
    * Provides a container for APIs that are still in Preview, not released for use in production add-ins.
    */
    var Preview: {
        /**
         * Initializes the use of custom JavaScript functions in Excel.
         */
        startCustomFunctions(): Promise<void>;
    }

    /** A Promise object. Promises can be chained via ".then", and errors can be caught via ".catch". When a browser-provided native Promise implementation is available, Office.Promise will switch to use the native Promise instead. */
    var Promise: IPromiseConstructor;

    // Note: this is a copy of the PromiseConstructor object from
    //     https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2015.promise.d.ts
    // It is necessary so that even with targeting "ES5" and not specifying any libs,
    //     developers will still get IntelliSense for "Office.Promise" just as they would with a regular Promise.
    // (because even though Promise is part of standard lib.d.ts, PromiseConstructor is not)
    export interface IPromiseConstructor {
        /**
         * A reference to the prototype.
         */
        readonly prototype: Promise<any>;

        /**
         * Creates a new Promise.
         * @param executor - A callback used to initialize the promise. This callback is passed two arguments:
         * a resolve callback used resolve the promise with a value or the result of another promise,
         * and a reject callback used to reject the promise with a provided reason or error.
         */
        new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<T1 | T2 | T3 | T4 | T5 | T6>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<T1 | T2 | T3 | T4 | T5>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<T1 | T2 | T3 | T4>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<T1 | T2 | T3>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<T1 | T2>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values - An array of Promises.
         * @returns A new Promise.
         */
        race<T>(values: (T | PromiseLike<T>)[]): Promise<T>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason - The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject(reason: any): Promise<never>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason - The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject<T>(reason: any): Promise<T>;

        /**
         * Creates a new resolved promise for the provided value.
         * @param value - A promise.
         * @returns A promise whose internal state matches the provided promise.
         */
        resolve<T>(value: T | PromiseLike<T>): Promise<T>;

        /**
         * Creates a new resolved promise .
         * @returns A resolved promise.
         */
        resolve(): Promise<void>;
    }

    /**
     * Gets the Context object that represents the runtime environment of the add-in and provides access to the top-level objects of the API.
     */
    var context: Context;
    /**
     * This method is called after the Office API was loaded.
     * @param reason - Indicates how the app was initialized
     */
    export function initialize(reason: InitializationReason): void;
    /**
    * Ensures that the Office JavaScript APIs are ready to be called by the add-in. If the framework hasn't initialized yet, the callback or promise will wait until the Office host is ready to accept API calls.
    * Note that though this API is intended to be used inside an Office add-in, it can also be used outside the add-in. In that case, once Office.js determines that it is running outside of an Office host application, it will call the callback and resolve the promise with "null" for both the host and platform.
    * @param callback - An optional callback method, that will receive the host and platform info. Alternatively, rather than use a callback, an add-in may simply wait for the Promise returned by the function to resolve.
    * @returns A Promise that contains the host and platform info, once initialization is completed.
    */
    export function onReady(callback?: (info: { host: HostType, platform: PlatformType }) => any): Promise<{ host: HostType, platform: PlatformType }>;
    /**
     * Indicates if the large namespace for objects will be used or not.
     * @param useShortNamespace - Indicates if 'true' that the short namespace will be used
     */
    export function useShortNamespace(useShortNamespace: boolean): void;
    // Enumerations
    /**
     * Specifies the result of an asynchronous call.
     * @remarks
     * Returned by the status property of the AsyncResult object.
     *
     * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
     */
    enum AsyncResultStatus {
        /**
         * The call succeeded.
         */
        Succeeded,
        /**
         * The call failed, check the error object.
         */
        Failed
    }
    /**
     * Specifies whether the add-in was just inserted or was already contained in the document.
     *
     * @remarks
     * Hosts: Excel, Project, Word
     */
    enum InitializationReason {
        /**
         * The add-in was just inserted into the document.
         */
        Inserted,
        /**
         * The add-in is already part of the document that was opened.
         */
        DocumentOpened
    }
    /**
     * Specifies the host Office application in which the add-in is running.
     *
     * @remarks
     * Hosts: Excel, Word, PowerPoint, Outlook, OneNote, Project, Access
     */
    enum HostType {
        /**
         * The Office host is Microsoft Word.
         */
        Word,
        /**
         * The Office host is Microsoft Excel.
         */
        Excel,
        /**
         * The Office host is Microsoft PowerPoint.
         */
        PowerPoint,
        /**
         * The Office host is Microsoft Outlook.
         */
        Outlook,
        /**
         * The Office host is Microsoft OneNote.
         */
        OneNote,
        /**
         * The Office host is Microsoft Project.
         */
        Project,
        /**
         * The Office host is Microsoft Access.
         */
        Access
    }
    /**
     * Specifies the OS or other platform on which the Office host application is running.
     *
     * @remarks
     * Hosts: Excel, Word, PowerPoint, Outlook, OneNote, Project, Access
     */
    enum PlatformType {
        /**
         * The platform is PC (Windows).
         */
        PC,
        /**
         * The platform is Office Online.
         */
        OfficeOnline,
        /**
         * The platform is Mac.
         */
        Mac,
        /**
         * The platform an iOS device.
         */
        iOS,
        /**
         * The platform is an Android device.
         */
        Android,
        /**
         * The platform is WinRT.
         */
        Universal
    }
    // Objects
        /**
        * An object which encapsulates the result of an asynchronous request, including status and error information if the request failed.
        *
        * @remarks
        * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
        *
        * When the function you pass to the `callback` parameter of an "Async" method executes, it receives an AsyncResult object that you can access from the `callback` function's only parameter.
        */
        export interface AsyncResult {
        /**
        * Gets the user-defined item passed to the optional `asyncContext` parameter of the invoked method in the same state as it was passed in. This the user-defined item (which can be of any JavaScript type: String, Number, Boolean, Object, Array, Null, or Undefined) passed to the optional `asyncContext` parameter of the invoked method. Returns Undefined, if you didn't pass anything to the asyncContext parameter.
        *
        * @remarks
        * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
        */
        asyncContext: any;
        /**
        * Gets the {@link Office.AsyncResultStatus} of the asynchronous operation.
        *
        * @remarks
        * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
        */
        status: AsyncResultStatus;
        /**
        * Gets an {@link Office.Error} object that provides a description of the error, if any error occurred.
        *
        * @remarks
        * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
        */
        error: Error;
        /**
        * Gets the payload or content of this asynchronous operation, if any.

        * @remarks
        * You access the AsyncResult object in the function passed as the argument to the callback parameter of an "Async" method, such as the `getSelectedDataAsync` and `setSelectedDataAsync` methods of the Document object.
        *
        * Note: What the value property returns for a particular "Async" method varies depending on the purpose and context of that method. To determine what is returned by the value property for an "Async" method, refer to the "Callback value" section of the method's topic. For a complete listing of the "Async" methods, see the Remarks section of the AsyncResult object topic.
        *
        * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
        */
        value: any;
    }
    /**
     * Represents the runtime environment of the add-in and provides access to key objects of the API. 
     *
     * @remarks 
     * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word 
     */     
    export interface Context {
        /**
        * Provides information and access to the signed-in user.
        */
        auth: Auth;
        /**
        * True, if the current platform allows the add-in to display a UI for selling or upgrading; otherwise returns False.
        * 
        * @remarks
        * The iOS App Store doesn't support apps with add-ins that provide links to additional payment systems. However, Office Add-ins running on the Windows desktop or for Office Online in the browser, do allow such links. If you want the UI of your add-in to provide a link to an external payment system on platforms other than iOS, you can use the commerceAllowed property to control when that link is displayed.
        */
        commerceAllowed: boolean;
        /**
        * Gets the locale (language) specified by the user for editing the document or item.
        */
        contentLanguage: string;
        /**
        * Gets information about the environment in which the add-in is running.
        */
        diagnostics: ContextInformation;
        /**
        * Gets the locale (language) specified by the user for the UI of the Office host application.
        * @remarks
        * When using in Outlook,the applicable modes are Compose or read.
        */
        displayLanguage: string;
        /**
        * Gets an object that represents the document the content or task pane add-in is interacting with.
        */
        document: Document;
        /**
        * Contains the Office application host in which the add-in is running.
        */
        host: HostType;
        /**
        * Gets the license information for the user's Office installation.
        */
        license: string;
        /**
         * Provides access to the Outlook Add-in object model for Microsoft Outlook and Microsoft Outlook on the web.
         *
         * Namespaces:
         *
         * - diagnostics: Provides diagnostic information to an Outlook add-in.
         *
         * - item: Provides methods and properties for accessing a message or appointment in an Outlook add-in.
         *
         * - userProfile: Provides information about the user in an Outlook add-in.
         *
         * [Api set: Mailbox 1.0]
         *
         * @remarks
         * {@link https://docs.microsoft.com/outlook/add-ins/understanding-outlook-add-in-permissions | Minimum permission level}: Restricted
         *
         * Applicable Outlook mode: Compose or read
         */
        mailbox: Mailbox;
        /**
        * Provides access to the properties for Office theme colors.
        */
        officeTheme: OfficeTheme;
        /**
        * Provides the platform on which the add-in is running.
        */
        platform: PlatformType;
        /**
        * Provides a method for determining what requirement sets are supported on the current host and platform.
        */
        requirements: RequirementSetSupport;
        /**
         * Gets an object that represents the custom settings or state of a mail add-in saved to a user's mailbox.
         *
         * The RoamingSettings object lets you store and access data for a mail add-in that is stored in a user's mailbox, so that is available to that add-in when it is running from any host client application used to access that mailbox.
         *
         * [Api set: Mailbox 1.0]
         *
         * @remarks
         * {@link https://docs.microsoft.com/outlook/add-ins/understanding-outlook-add-in-permissions | Minimum permission level}: Restricted
         *
         * Applicable Outlook mode: Compose or read
         */
        roamingSettings: RoamingSettings;
        /**
        * Specifies whether the platform and device allows touch interaction.
        * 
        * @remarks
        * Use the touchEnabled property to determine when your add-in is running on a touch device and if necessary, adjust the kind of controls, and size and spacing of elements in your add-in's UI to accommodate touch interactions.
        */
        touchEnabled: boolean;
        /**
        * Provides objects and methods that you can use to create and manipulate UI components, such as dialog boxes.
        */
        ui: UI;
    }
    /**
     * Provides specific information about an error that occurred during an asynchronous data operation.
     *
     * @remarks
     * The Error object is accessed from the AsyncResult object that is returned in the function passed as the callback argument of an asynchronous data operation, such as the setSelectedDataAsync method of the Document object.
     *
     * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
     */
    export interface Error {
        /**
         * Gets the numeric code of the error.
         */
        code: number;
        /**
         * Gets the name of the error.
         */
        message: string;
        /**
         * Gets a detailed description of the error.
         */
        name: string;
    }
    export namespace AddinCommands {
        /**
         * The event object is passed as a parameter to add-in functions invoked by UI-less command buttons. The object allows the add-in to identify which button was clicked and to signal the host that it has completed its processing.
         * 
         * [Api set: Mailbox 1.3]
         * 
         * @remarks
         * 
         * Hosts: Excel, Outlook, PowerPoint, Word
         * 
         * Add-in type: Content, task pane, Outlook
         * 
         * {@link https://docs.microsoft.com/outlook/add-ins/understanding-outlook-add-in-permissions | Minimum permission level}: Restricted
         *
         * Applicable Outlook mode: Compose or Read
         */
        export interface Event {
            
            /**
             * Indicates that the add-in has completed processing that was triggered by an add-in command button or event handler.
             * 
             * This method must be called at the end of a function which was invoked by an add-in command defined with an Action element with an xsi:type attribute set to ExecuteFunction. Calling this method signals the host client that the function is complete and that it can clean up any state involved with invoking the function. For example, if the user closes Outlook before this method is called, Outlook will warn that a function is still executing.
             * 
             * This method must be called in an event handler added via Office.context.mailbox.addHandlerAsync after completing processing of the event.
             * 
             * [Api set: Mailbox 1.3]
             *
             * @remarks
             * 
             * {@link https://docs.microsoft.com/outlook/add-ins/understanding-outlook-add-in-permissions | Minimum permission level}: Restricted
             *
             * Applicable Outlook mode: Compose or read
             * 
             * @param options - Optional. An object literal that contains one or more of the following properties.
             *        allowEvent: A boolean value. When the completed method is used to signal completion of an event handler, this value indicates of the handled event should continue execution or be canceled. For example, an add-in that handles the ItemSend event can set allowEvent = false to cancel sending of the message.
             */
            completed(options?: any): void;
        }
    }
    /**
     * Provides objects and methods that you can use to create and manipulate UI components, such as dialog boxes, in your Office Add-ins.
     */
    export interface UI {
        /**
        * Displays a dialog to show or collect information from the user or to facilitate Web navigation.
        *
        * @remarks
        * Hosts: Word, Excel, Outlook, PowerPoint
        *
        * Requirement sets: DialogApi, Mailbox 1.4
        *
        * The initial page must be on the same domain as the parent page (the startAddress parameter). After the initial page loads, you can go to other domains.
        *
        * Any page calling office.context.ui.messageParent must also be on the same domain as the parent page.
        *
        * The following design considerations apply to dialog boxes:
        *
        * - An Office Add-in can have only one dialog box open at any time.
        *
        * - Every dialog box can be moved and resized by the user.
        *
        * - Every dialog box is centered on the screen when opened.
        *
        * - Dialog boxes appear on top of the host application and in the order in which they were created.
        *
        * Use a dialog box to:
        *
        * - Display authentication pages to collect user credentials.
        *
        * - Display an error/progress/input screen from a ShowTaspane or ExecuteAction command.
        *
        * - Temporarily increase the surface area that a user has available to complete a task.
        *
        * Do not use a dialog box to interact with a document. Use a task pane instead.
        *
        * @param startAddress - Accepts the initial HTTPS URL that opens in the dialog.
        * @param options - Optional. Accepts a DialogOptions object to define dialog display.
        * @param callback - Optional. Accepts a callback method to handle the dialog creation attempt. If successful, the AsyncResult.value is a DialogHandler object.
        */
        displayDialogAsync(startAddress: string, options?: DialogOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Delivers a message from the dialog box to its parent/opener page. The page calling this API must be on the same domain as the parent.
         * @param messageObject - Accepts a message from the dialog to deliver to the add-in.
         */
        messageParent(messageObject: any): void;
        /**
         * Closes the UI container where the JavaScript is executing.
         *
         * @remarks
         * The behavior of this method is specified by the following:
         *
         * - Called from a UI-less command button: No effect. Any dialog opened by displayDialogAsync will remain open.
         *
         * - Called from a taskpane: The taskpane will close. Any dialog opened by displayDialogAsync will also close. If the taskpane supports pinning and was pinned by the user, it will be un-pinned.
         *
         * - Called from a module extension: No effect.
         *
         * Hosts: Excel, Word, PowerPoint, Outlook (Minimum requirement set: Mailbox 1.5)
         */
        closeContainer(): void;
    }
    /**
     * Provides information about what Requirement Sets are supported in current environment.
     */
    export interface RequirementSetSupport {
        /**
        * Check if the specified requirement set is supported by the host Office application.
        * @param name - Set name; e.g., "MatrixBindings".
        * @param minVersion - The minimum required version; e.g., "1.4".
        */
       isSetSupported(name: string, minVersion?: number): boolean;
}
    /**
     * Provides options for how a dialog is displayed.
     */
    export interface DialogOptions {
        /**
         * Defines the width of the dialog as a percentage of the current display. Defaults to 80%. 250px minimum.
         */
        height?: number,
        /**
         * Defines the height of the dialog as a percentage of the current display. Defaults to 80%. 150px minimum.
         */
        width?: number,
        /**
         * Determines whether the dialog box should be displayed within an IFrame. This setting is only applicable in Office Online clients, and is ignored by other platforms. If false (default), the dialog will be displayed as a new browser window (pop-up). Recommended for authentication pages that cannot be displayed in an IFrame. If true, the dialog will be displayed as a floating overlay with an IFrame. This is best for user experience and performance.
         */
        displayInIframe?: boolean
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * The Office Auth namespace, Office.context.auth, provides a method that allows the Office host to obtain and access the add-in token. Indirectly, enable the add-in to access the signed-in user's Microsoft Graph data without requiring the user to sign in a second time.
     */
    export interface Auth {
        /**
        * Calls the Azure Active Directory V 2.0 endpoint to get an access token to your add-in's web application. Allows add-ins to identify users. Server side code can use this token to access Microsoft Graph for the add-in's web application by using the {@link https://docs.microsoft.com/azure/active-directory/develop/active-directory-v2-protocols-oauth-on-behalf-of | "on behalf of" OAuth flow}.
        *
        * @remarks
        * Hosts: Excel, OneNote, Outlook, PowerPoint, Word
        *
        * Requirement sets: IdentityAPI
        *
        * This API requires a single sign-on configuration that bridges the add-in to an Azure application. Office users sign-in with Organizational Accounts and Microsoft Accounts. Microsoft Azure returns tokens intended for both user account types to access resources in the Microsoft Graph.
        *
        * @param options - Optional. Accepts an AuthOptions object to define sign-on behaviors.
        * @param callback - Optional. Accepts a callback method to handle the token acquisition attempt. If AsyncResult.status is "succeeded", then AsyncResult.value is the raw AAD v. 2.0-formatted access token.
        */
        getAccessTokenAsync(options?: AuthOptions, callback?: (result: AsyncResult) => void): void;

    }
    /**
     * Provides options for the user experience when Office obtains an access token to the add-in from AAD v. 2.0 with the getAccessTokenAsync method.
     */
    export interface AuthOptions {
        /**
         * Causes Office to display the add-in consent experience. Useful if the add-in's Azure permissions have changed or if the user's consent has been revoked.
         */
        forceConsent?: boolean,
        /**
         * Prompts the user to add (or to switch if already added) his or her Office account.
         */
        forceAddAccount?: boolean,
        /**
         * Causes Office to prompt the user to provide the additional factor when the tenancy being targeted by Microsoft Graph requires multifactor authentication. The string value identifies the type of additional factor that is required. In most cases, you won't know at development time whether the user's tenant requires an additional factor or what the string should be. So this option would be used in a "second try" call of getAccessTokenAsync after Microsoft Graph has sent an error requesting the additional factor and containing the string that should be used with the authChallenge option.
         */
        authChallenge?: string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides an option for preserving context data of any type, unchanged, for use in a callback.
     */
    export interface AsyncContextOptions {
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides information about the environment in which the add-in is running.
     */
    export interface ContextInformation {
        /**
        * Gets the Office application host in which the add-in is running.
        */
        host: Office.HostType;
        /**
        * Gets the platform on which the add-in is running.
        */
        platform: Office.PlatformType;
        /**
        * Gets the version of Office on which the add-in is running.
        */
        version: string;
    }
    /**
     * Provides options for how to get the data in a binding.
     *
     * @remarks
     * If the rows option is used, the value must be "thisRow".
     */
    export interface GetBindingDataOptions {
        /**
         * The expected shape of the selection. Use Office.CoercionType or text value. Default: The original, uncoerced type of the binding.
         */
        coercionType?: Office.CoercionType | string
        /**
         * Specifies whether values, such as numbers and dates, are returned with their formatting applied. Use Office.ValueFormat or text value. Default: Unformatted data.
         */
        valueFormat?: Office.ValueFormat | string
        /**
        * For table or matrix bindings, specifies the zero-based starting row for a subset of the data in the binding. Default is first row.
        */
        startRow?: number
        /**
        * For table or matrix bindings, specifies the zero-based starting column for a subset of the data in the binding. Default is first column.
        */
        startColumn?: number
        /**
        * For table or matrix bindings, specifies the number of rows offset from the startRow. Default is all subsequent rows.
        */
        rowCount?: number
        /**
        * For table or matrix bindings, specifies the number of columns offset from the startColumn. Default is all subsequent columns.
        */
        columnCount?: number
        /**
        * Specify whether to get only the visible (filtered in) data or all the data (default is all). Useful when filtering data. Use Office.FilterType or text value.
        */
        filterType?: Office.FilterType | string
        /**
        * Only for table bindings in content add-ins for Access. Specifies the pre-defined string "thisRow" to get data in the currently selected row.
        */
        rows?: string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for how to set the data in a binding.
     *
     * @remarks
     * If the rows option is used, the value must be "thisRow".
     */
    export interface SetBindingDataOptions {
        /**
         * Use only with binding type table and when a TableData object is passed for the data parameter. An array of objects that specify a range of columns, rows, or cells and specify, as key-value pairs, the cell formatting to apply to that range. Example: [{cells: Office.Table.Data, format: {fontColor: "yellow"}},
        {cells: {row: 3, column: 4}, format: {borderColor: "white", fontStyle: "bold"}}]
         */
        cellFormat?: Array<RangeFormatConfiguration>
        /**
         * Explicitly sets the shape of the data object. If not supplied is inferred from the data type.
         */
        coercionType?: Office.CoercionType | string
        /**
        * Only for table bindings in content add-ins for Access. Array of strings. Specifies the column names.
        */
        columns?: Array<string>
        /**
        * Only for table bindings in content add-ins for Access. Specifies the pre-defined string "thisRow" to get data in the currently selected row.
        */
        rows?: string
        /**
        * Specifies the zero-based starting row for a subset of the data in the binding. Only for table or matrix bindings. If omitted, data is set starting in the first row.
        */
        startRow?: number
        /**
        * Specifies the zero-based starting column for a subset of the data. Only for table or matrix bindings. If omitted, data is set starting in the first column.
        */
        startColumn?: number
        /**
        * For an inserted table, a list of key-value pairs that specify table formatting options, such as header row, total row, and banded rows. Example: {bandedRows: true,  filterButton: false}
        */
        tableOptions?: object
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Specifies a range and its formatting.
     */
    export interface RangeFormatConfiguration {
        /**
         * Specifies the range. Example of using Office.Table enum: Office.Table.All. Example of using RangeCoordinates: {row: 3, column: 4} specifies the cell in the 3rd (zero-based) row in the 4th (zero-based) column.
         */
         cells: Office.Table | RangeCoordinates
        /**
         * Specifies the formatting as key-value pairs. Example: {borderColor: "white", fontStyle: "bold"}
         */
         format: object
    }
    /**
     * Specifies a cell, or row, or column, by its zero-based row and/or column number. Example: {row: 3, column: 4} specifies the cell in the 3rd (zero-based) row in the 4th (zero-based) column.
     */
    export interface RangeCoordinates {
        /**
         * The zero-based row of the range. If not specified, all cells, in the column specified by `column` are included.
         */
         row?: number
        /**
         * The zero-based column of the range. If not specified, all cells, in the row specified by `row` are included.
         */
         column?: number
    }
    /**
     * Provides options to determine which event handler or handlers are removed.
     */
    export interface RemoveHandlerOptions {
        /**
         * The handler to be removed. If not specified all handlers for the specified event type are removed.
         */
        handler?: string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for configuring the binding that is created.
     */
    export interface AddBindingFromNamedItemOptions {
        /**
         * The unique ID of the binding. Autogenerated if not supplied.
         */
        id?: string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for configuring the prompt and identifying the binding that is created.
     */
    export interface AddBindingFromPromptOptions {
        /**
         * The unique ID of the binding. Autogenerated if not supplied.
         */
        id?: string
        /**
         * Specifies the string to display in the prompt UI that tells the user what to select. Limited to 200 characters. If no promptText argument is passed, "Please make a selection" is displayed.
         */
        promptText?: string
        /**
         * Specifies a table of sample data displayed in the prompt UI as an example of the kinds of fields (columns) that can be bound by your add-in. The headers provided in the TableData object specify the labels used in the field selection UI. Note: This parameter is used only in add-ins for Access. It is ignored if provided when calling the method in an add-in for Excel.
         */
        sampleData?: Office.TableData
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for configuring the prompt and identifying the binding that is created.
     */
    export interface AddBindingFromSelectionOptions {
        /**
         * The unique ID of the binding. Autogenerated if not supplied.
         */
        id?: string
        /**
         * The names of the columns involved in the binding.
         */
        columns?: Array<string>
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for setting the size of slices that the document will be divided into.
     */
    export interface GetFileOptions {
        /**
         * The the size of the slices in bytes. The maximum (and the default) is 4194304 (4MB).
         */
        sliceSize?: number
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for customizing what data is returned and how it is formatted.
     */
    export interface GetSelectedDataOptions {
        /**
         * Specify whether the data is formatted. Use Office.ValueFormat or string equivalent.
         */
        valueFormat?: Office.ValueFormat | string
        /**
         * Specify whether to get only the visible (that is, filtered-in) data or all the data. Useful when filtering data. Use Office.FilterType or string equivalent. This parameter is ignored in Word documents.
         */
        filterType?: Office.FilterType | string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for whether to select the location that is navigated to.
     *
     * @remarks
     * The behavior caused by the options.selectionMode option varies by host:
     *
     * In Excel: Office.SelectionMode.Selected selects all content in the binding, or named item. Office.SelectionMode.None for text bindings, selects the cell; for matrix bindings, table bindings, and named items, selects the first data cell (not first cell in header row for tables).
     *
     * In PowerPoint: Office.SelectionMode.Selected selects the slide title or first textbox on the slide. Office.SelectionMode.None Doesn't select anything.
     *
     * In Word: Office.SelectionMode.Selected selects all content in the binding. Office.SelectionMode.None for text bindings, moves the cursor to the beginning of the text; for matrix bindings and table bindings, selects the first data cell (not first cell in header row for tables).
     */
    export interface GoToByIdOptions {
        /**
         * Specifies whether the location specified by the id parameter is selected (highlighted). Use Office.SelectionMode or string equivalent. See the Remarks for more information.
         */
        selectionMode?: Office.SelectionMode | string
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for how to insert data to the selection.
     */
    export interface SetSelectedDataOptions {
        /**
         * Use only with binding type table and when a TableData object is passed for the data parameter. An array of objects that specify a range of columns, rows, or cells and specify, as key-value pairs, the cell formatting to apply to that range. Example: [{cells: Office.Table.Data, format: {fontColor: "yellow"}},
        {cells: {row: 3, column: 4}, format: {borderColor: "white", fontStyle: "bold"}}]
         */
        cellFormat?: Array<RangeFormatConfiguration>
        /**
         * Explicitly sets the shape of the data object. If not supplied is inferred from the data type.
         */
        coercionType?: Office.CoercionType | string
        /**
         * For an inserted table, a list of key-value pairs that specify table formatting options, such as header row, total row, and banded rows. Example: {bandedRows: true,  filterButton: false}
         */
        tableOptions?: object
        /**
        * This option is applicable for inserting images. Indicates the insert location in relation to the top of the slide for PowerPoint, and its relation to the currently selected cell in Excel. This value is ignored for Word. This value is in points.
        */
        imageTop?: number
        /**
        * This option is applicable for inserting images. Indicates the image width. If this option is provided without the imageHeight, the image will scale to match the value of the image width. If both image width and image height are provided, the image will be resized accordingly. If neither the image height or width is provided, the default image size and aspect ratio will be used. This value is in points.
        */
        imageWidth?: number
        /**
        * This option is applicable for inserting images. Indicates the insert location in relation to the left side of the slide for PowerPoint, and its relation to the currently selected cell in Excel. This value is ignored for Word. This value is in points.
        */
        imageLeft?: number
        /**
        * This option is applicable for inserting images. Indicates the image height. If this option is provided without the imageWidth, the image will scale to match the value of the image height. If both image width and image height are provided, the image will be resized accordingly. If neither the image height or width is provided, the default image size and aspect ratio will be used. This value is in points.
        */
        imageHeight?: number
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides options for saving settings.
     */
    export interface SaveSettingsOptions {
        /**
         * Indicates whether the setting will be replaced if stale.
         */
        overwriteIfStale?: boolean
        /**
         * A user-defined item of any type that is returned, unchanged, in the value property of the AsyncResult object that is passed to a callback.
         */
        asyncContext?: any
    }
    /**
     * Provides access to the properties for Office theme colors.
     *
     * Using Office theme colors lets you coordinate the color scheme of your add-in with the current Office theme selected by the user with File > Office Account > Office Theme UI, which is applied across all Office host applications. Using Office theme colors is appropriate for mail and task pane add-ins.
     *
     * @remarks
     * Hosts: Excel, Outlook, Powerpoint, Project, Word
     */
    export interface OfficeTheme {
        /**
         * Gets the Office theme body background color as a hexadecimal color triplet (e.g. "FFA500").
         */
        bodyBackgroundColor: string;
        /**
         * Gets the Office theme body foreground color as a hexadecimal color triplet (e.g. "FFA500").
         */
        bodyForegroundColor: string;
        /**
         * Gets the Office theme control background color as a hexadecimal color triplet (e.g. "FFA500").
         */
        controlBackgroundColor: string;
        /**
         * Gets the Office theme body control color as a hexadecimal color triplet (e.g. "FFA500").
         */
        controlForegroundColor: string;
    }
    /**
     * Dialog object returned as part of the displayDialogAsync callback. The object exposes methods for registering event handlers and closing the dialog
     */
    export interface DialogHandler {
        /**
         * When called from an active add-in dialog, asynchronously closes the dialog.
         */
        close(): void;
        /**
         * Registers an event handler. The two supported events are:
         *
         * - DialogMessageReceived. Triggered when the dialog box sends a message to its parent.
         *
         * - DialogEventReceived. Triggered when the dialog box has been closed or otherwise unloaded.
         */
        addEventHandler(eventType: Office.EventType, handler: Function): void;
    }
}

export declare namespace Office {
    /**
     * Returns a promise of an object described in the expression. Callback is invoked only if method fails.
     * @param expression - The object to be retrieved. Example "bindings#BindingName", retrieves a binding promise for a binding named 'BindingName'
     * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
     */
    export function select(expression: string, callback?: (result: AsyncResult) => void): Binding;
    // Enumerations
    /**
     * Specifies the state of the active view of the document, for example, whether the user can edit the document.
     * @remarks
     * Hosts: PowerPoint
     */
    enum ActiveView {
        /**
         * The active view of the host application only lets the user read the content in the document.
         */
        Read,
        /**
         * The active view of the host application lets the user edit the content in the document.
         */
        Edit
    }
    /**
     * Specifies the type of the binding object that should be returned.
     * @remarks
     * Hosts: Access, Excel, Word
     */
    enum BindingType {
        /**
         * Plain text. Data is returned as a run of characters.
         */
        Text,
        /**
         * Tabular data without a header row. Data is returned as an array of arrays, for example in this form: [[row1column1, row1column2],[row2column1, row2column2]]
         */
        Matrix,
        /**
         * Tabular data with a header row. Data is returned as a TableData object.
         */
        Table
    }
    /**
     * Specifies how to coerce data returned or set by the invoked method.
     *
     * @remarks
     * PowerPoint supports only Office.CoercionType.Text, Office.CoercionType.Image, and Office.CoercionType.SlideRange. Project supports only Office.CoercionType.Text.
     *
     * Hosts: Access, Excel, Outlook, PowerPoint, Project, Word
     */
    enum CoercionType {
        /**
         * Return or set data as text (string).Data is returned or set as a one-dimensional run of characters.
         */
        Text,
        /**
         * Return or set data as tabular data with no headers. Data is returned or set as an array of arrays containing one-dimensional runs of characters. For example, three rows of  string values in two columns would be: [["R1C1", "R1C2"], ["R2C1", "R2C2"], ["R3C1", "R3C2"]].
         * @remarks
         * Only applies to data in Excel and Word.
         */
        Matrix,
        /**
         * Return or set data as tabular data with optional headers. Data is returned or set as an array of arrays with optional headers.
         * @remarks
         * Only applies to data in Access, Excel and Word.
         */
        Table,
        /**
         * Return or set data as HTML.
         * @remarks
         * Only applies to data in add-ins for Word and Outlook add-ins for Outlook (compose mode).
         */
        Html,
        /**
         * Return or set data as Office Open XML.
         * @remarks
         * Only applies to data in Word.
         */
        Ooxml,
        /**
         * Return a JSON object that contains an array of the ids, titles, and indexes of the selected slides.For example,  {"slides":[{"id":257,"title":"Slide 2","index":2},{"id":256,"title":"Slide 1","index":1}]} for a selection of two slides.
         * @remarks
         * Only applies to data in PowerPoint when calling the Document.getSelectedData method to get the current slide or selected range of slides.
         */
        SlideRange,
        /**
        * Data is returned or set as an image stream.
        * @remarks
        * Only applies to data in Excel, Word and PowerPoint.
        */
        Image
    }
    /**
     * Specifies whether the document in the associated application is read-only or read-write.
     * @remarks
     * Returned by the mode property of the Document object.
     *
     * Hosts: Excel, PowerPoint, Project, Word
     */
    enum DocumentMode {
        /**
         * The document is read-only.
         */
        ReadOnly,
        /**
         * The document can be read and written to.
         */
        ReadWrite
    }
    /**
     * Specifies the type of the XML node.
     *
     * @remarks
     * Hosts: Word
     * 
     * Available in Requirement set: CustomXmlParts
     */
    enum CustomXMLNodeType {
        /**
         * The node is an attribute.
         */
        Attribute,
        /**
         * The node is CData.
         */
        CData,
        /**
         * The node is a comment.
         */
        NodeComment,
        /**
         * The node is an element.
         */
        Element,
        /**
         * The node is a Document element.
         */
        NodeDocument,
        /**
         * The node is a processing instruction.
         */
        ProcessingInstruction,
        /**
         * The node is text.
         */
        Text,
    }
    /**
     * Specifies the kind of event that was raised. Returned by the type property of an EventNameEventArgs object.
     *
     * @remarks
     * Add-ins for Project support the Office.EventType.ResourceSelectionChanged, Office.EventType.TaskSelectionChanged, and Office.EventType.ViewSelectionChanged event types.
     *
     * Hosts: Access, Excel, PowerPoint, Project, Word
     */
    enum EventType {
        /**
         * A Document.ActiveViewChanged event was raised.
         */
        ActiveViewChanged,
        /**
         * Occurs when data within the binding is changed.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * To add an event handler for the BindingDataChanged event of a binding, use the addHandlerAsync method of the Binding object. The event handler receives an argument of type BindingDataChangedEventArgs.
         */
        BindingDataChanged,
        /**
         * Occurs when the selection is changed within the binding.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: BindingEvents
         *
         * To add an event handler for the BindingSelectionChanged event of a binding, use the addHandlerAsync method of the Binding object. The event handler receives an argument of type BindingSelectionChangedEventArgs.
         */
        BindingSelectionChanged,
        /**
         * Triggers when Dialog sends a message via MessageParent.
         */
        DialogMessageReceived,
        /**
         * Triggers when Dialog has a event, such as dialog closed, dialog navigation failed.
         */
        DialogEventReceived,
        /**
         * Triggers when a document level selection happens
         */
        DocumentSelectionChanged,
        /**
         * A Document.SelectionChanged event was raised.
         */
        ItemChanged,
        /**
         * Triggers when a customXmlPart node was deleted
         */
        NodeDeleted,
        /**
         * Triggers when a customXmlPart node was inserted
         */
        NodeInserted,
        /**
         * Triggers when a customXmlPart node was replaced
         */
        NodeReplaced,
        /**
         * The recurrence pattern of the selected series has changed.
         */
        RecurrencePatternChanged,
        /**
         * Triggers when a Resource selection happens in Project.
         */
        ResourceSelectionChanged,
        /**
         * A Settings.settingsChanged event was raised.
         */
        SettingsChanged,
        /**
         * Triggers when a Task selection happens in Project.
         */
        TaskSelectionChanged,
        /**
         * Triggers when a View selection happens in Project.
         */
        ViewSelectionChanged
    }
    /**
     * Specifies the format in which to return the document.
     *
     * @remarks
     * Hosts: PowerPoint, Word
     */
    enum FileType {
        /**
         * Returns only the text of the document as a string. (Word only)
         */
        Text,
        /**
         * Returns the entire document (.pptx, .docx, or .xslx) in Office Open XML (OOXML) format as a byte array.
         */
        Compressed,
        /**
         * Returns the entire document in PDF format as a byte array.
         */
        Pdf
    }
    /**
     * Specifies whether filtering from the host application is applied when the data is retrieved.
     *
     * @remarks
     * Hosts: Excel, Project, Word
     */
    enum FilterType {
        /**
         * Return all data (not filtered by the host application).
         */
        All,
        /**
         * Return only the visible data (as filtered by the host application).
         */
        OnlyVisible
    }
    /**
     * Specifies the type of place or object to navigate to.
     *
     * @remarks
     * Hosts: Excel, PowerPoint, Word
     */
    enum GoToType {
        /**
         * Goes to a binding object using the specified binding id.
         */
        Binding,
        /**
         * Goes to a named item using that item's name.
         * In Excel, you can use any structured reference for a named range or table: "Worksheet2!Table1"
         */
        NamedItem,
        /**
         * Goes to a slide using the specified id.
         */
        Slide,
        /**
         * Goes to the specified index by slide number or Office.Index
         */
        Index
    }
    /**
     * Specifies whether to select (highlight) the location to navigate to (when using the Document.goToByIdAsync method).
     *
     * @remarks
     * Hosts: Excel, PowerPoint, Word
     */
    enum SelectionMode {
        Default,
        /**
         * The location will be selected (highlighted).
         */
        Selected,
        /**
         * The cursor is moved the beginning of the location.
         */
        None
    }
    /**
     * Specifies whether values, such as numbers and dates, returned by the invoked method are returned with their formatting applied.
     *
     * @remarks
     * For example, if the valueFormat parameter is specified as "formatted", a number formatted as currency, or a date formatted as mm/dd/yy in the host application will have its formatting preserved. If the valueFormat parameter is specified as "unformatted", a date will be returned in its underlying sequential serial number form.
     *
     * Hosts: Excel, Project, Word
     */
    enum ValueFormat {
        /**
         * Return unformatted data.
         */
        Unformatted,
        /**
         * Return formatted data.
         */
        Formatted
    }
    // Objects
    /**
    * Represents a binding to a section of the document.
    *
    * @remarks
    * Hosts: Access, Excel, Word
    *
    * Available in Requirement sets: MatrixBinding, TableBinding, TextBinding
    *
    * The Binding object exposes the functionality possessed by all bindings regardless of type.
    *
    * The Binding object is never called directly. It is the abstract parent class of the objects that represent each type of binding: MatrixBinding, TableBinding, or TextBinding. All three of these objects inherit the getDataAsync and setDataAsync methods from the Binding object that enable to you interact with the data in the binding. They also inherit the id and type properties for querying those property values. Additionally, the MatrixBinding and TableBinding objects expose additional methods for matrix- and table-specific features, such as counting the number of rows and columns.
    */
    export interface Binding {
        /**
        * Get the Document object associated with the binding.
        *
        * @remarks
        * Hosts: Access, Excel, Word
        */
        document: Document;
        /**
         * A string that uniquely identifies this binding among the bindings in the same Document object.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         */
        id: string;
        /**
        * Gets the type of the binding.
        *
        * @remarks
        * Hosts: Access, Excel, Word
        */
        type: BindingType;
        /**
         * Adds an event handler to the object for the specified event type.
         *
         * @remarks
         * You can add multiple event handlers for the specified eventType as long as the name of each event handler function is unique.
         *
         * @param eventType - The event type. For example, for bindings, it can be **Office.EventType.BindingSelectionChanged**, **Office.EventType.BindingDataChanged**, or the corresponding text values of these enumerations.
         * @param handler - The event handler function to add.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the data contained within the binding.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement sets: MatrixBindings, TableBindings, TextBindings
         *
         * When called from a MatrixBinding or TableBinding, the getDataAsync method will return a subset of the bound values if the optional startRow, startColumn, rowCount, and columnCount parameters are specified (and they specify a contiguous and valid range).
         *
         * @param options - Provides options for how to get the data in a binding.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getDataAsync(options?: GetBindingDataOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes the specified handler from the binding for the specified event type.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: BindingEvents
         *
         * @param eventType - The event type. For binding can be 'bindingDataChanged' and 'bindingSelectionChanged'
         * @param options - Provides options to determine which event handler or handlers are removed.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        removeHandlerAsync(eventType: EventType, options?: RemoveHandlerOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Writes data to the bound section of the document represented by the specified binding object.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement sets: MatrixBindings, TableBindings, TextBindings
         *
         * @param data - The data to be set in the current selection. Possible data types by host:
         *
         *        string: Excel, Excel Online, Word, and Word Online only
         *
         *        array of arrays: Excel and Word only
         *
         *        {@link Office.TableData}: Access, Excel, and Word only
         *
         *        HTML: Word and Word Online only
         *
         *        Office Open XML: Word only
         *
         * @param options - Provides options for how to set the data in a binding.
         *
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setDataAsync(data: TableData | any, options?: SetBindingDataOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
    * Represents the bindings the add-in has within the document.
    *
    * @remarks
    * Hosts:
    */
    export interface Bindings {
        /**
        * Gets a Document object that represents the document associated with this set of bindings.
        *
        *remarks
        * Hosts: Access, Excel, Word
        */
        document: Document;
        /**
         * Creates a binding against a named object in the document.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: MatrixBindings, TableBindings, TextBindings
         *
         * For Excel, the itemName parameter can refer to a named range or a table.
         *
         * By default, adding a table in Excel assigns the name "Table1" for the first table you add, "Table2" for the second table you add, and so on. To assign a meaningful name for a table in the Excel UI, use the Table Name property on the Table Tools | Design tab of the ribbon.
         *
         *     Note: In Excel, when specifying a table as a named item, you must fully qualify the name to include the worksheet name in the name of the table in this format: "Sheet1!Table1"
         *
         * For Word, the itemName parameter refers to the Title property of a Rich Text content control. (You can't bind to content controls other than the Rich Text content control.)
         *
         * By default, a content control has no Title value assigned. To assign a meaningful name in the Word UI, after inserting a Rich Text content control from the Controls group on the Developer tab of the ribbon, use the Properties command in the Controls group to display the Content Control Properties dialog box. Then set the Title property of the content control to the name you want to reference from your code.
         *
         *     Note: In Word, if there are multiple Rich Text content controls with the same Title property value (name), and you try to bind to one these content controls with this method (by specifying its name as the itemName parameter), the operation will fail.
         *
         * @param itemName - Name of the bindable object in the document. For Example 'MyExpenses' table in Excel."
         * @param bindingType - The Office BindingType for the data. The method returns null if the selected object cannot be coerced into the specified type.
         * @param options - Provides options for configuring the binding that is created.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addFromNamedItemAsync(itemName: string, bindingType: BindingType, options?: AddBindingFromNamedItemOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Create a binding by prompting the user to make a selection on the document.
         *
         * @remarks
         * Hosts: Access, Excel
         *
         * Available in Requirement set: Not in a set
         *
         * Adds a binding object of the specified type to the Bindings collection, which will be identified with the supplied id. The method fails if the specified selection cannot be bound.
         *
         * @param bindingType - Specifies the type of the binding object to create. Required. Returns null if the selected object cannot be coerced into the specified type.
         * @param options - Provides options for configuring the prompt and identifying the binding that is created.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addFromPromptAsync(bindingType: BindingType, options?: AddBindingFromPromptOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Create a binding based on the user's current selection.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: MatrixBindings, TableBindings, TextBindings
         *
         * Adds the specified type of binding object to the Bindings collection, which will be identified with the supplied id.
         *
         * Note In Excel, if you call the addFromSelectionAsync method passing in the Binding.id of an existing binding, the Binding.type of that binding is used, and its type cannot be changed by specifying a different value for the bindingType parameter.If you need to use an existing id and change the bindingType, call the Bindings.releaseByIdAsync method first to release the binding, and then call the addFromSelectionAsync method to reestablish the binding with a new type.
         *
         * @param bindingType - Specifies the type of the binding object to create. Required. Returns null if the selected object cannot be coerced into the specified type.
         * @param options - Provides options for configuring the prompt and identifying the binding that is created.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addFromSelectionAsync(bindingType: BindingType, options?: AddBindingFromSelectionOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets all bindings that were previously created.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: MatrixBindings, TableBindings, TextBindings
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getAllAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Retrieves a binding based on its Name
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: CustomXmlParts, MatrixBindings, TableBindings, TextBindings
         *
         * Fails if the specified id does not exist.
         *
         * @param id - Specifies the unique name of the binding object. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
          */
        getByIdAsync(id: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes the binding from the document
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: MatrixBindings, TableBindings, TextBindings
         *
         * Fails if the specified id does not exist.
         *
         * @param id - Specifies the unique name to be used to identify the binding object. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        releaseByIdAsync(id: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Represents an XML node in a tree in a document.
     *
     * @remarks
     * Hosts: Word
     *
     * Available in Requirement set: CustomXmlParts
     */
    export interface CustomXmlNode {
        /**
         * Gets the base name of the node without the namespace prefix, if one exists.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        baseName: string;
        /**
         * Retrieves the string GUID of the CustomXMLPart.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        namespaceUri: string;
        /**
         * Gets the type of the CustomXMLNode.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        nodeType: string;
        /**
         * Gets the nodes associated with the XPath expression.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param xPath - The XPath expression that specifies the nodes to get. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getNodesAsync(xPath: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the node value.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getNodeValueAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the text of an XML node in a custom XML part.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getTextAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the node's XML.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getXmlAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets the node value.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param value - The value to be set on the node
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setNodeValueAsync(value: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously sets the text of an XML node in a custom XML part.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param text - Required. The text value of the XML node.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setTextAsync(text: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets the node XML.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param xml - The XML to be set on the node
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setXmlAsync(xml: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Represents a single CustomXMLPart in a CustomXMLParts collection.
     *
     * @remarks
     * Hosts: Word
     *
     * Available in Requirement set: CustomXmlParts
     */
    export interface CustomXmlPart {
        /**
         * True, if the custom XML part is built in; otherwise false.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        builtIn: boolean;
        /**
         * Gets the GUID of the CustomXMLPart.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        id: string;
        /**
         * Gets the set of namespace prefix mappings (CustomXMLPrefixMappings) used against the current CustomXMLPart.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         */
        namespaceManager: CustomXmlPrefixMappings;
        /**
         * Adds an event handler to the object using the specified event type.
         *
         * @remarks
         * Hosts: Word
         *
         * You can add multiple event handlers for the specified eventType as long as the name of each event handler function is unique.
         *
         * @param eventType - Specifies the type of event to add. Required. For a CustomXmlPart object event, the eventType parameter can be specified as Office.EventType.DataNodeDeleted, Office.EventType.DataNodeInserted, Office.EventType.DataNodeReplaced, or the corresponding text values of these enumerations.
         * @param handler - The event handler function to add, whose only parameter is of type NodeDeletedEventArgs, NodeInsertedEventArgs, or NodeReplaceEventArgs. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback..
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addHandlerAsync(eventType: EventType, handler: (result: any) => void, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Deletes the Custom XML Part.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        deleteAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets any CustomXmlNodes in this custom XML part which match the specified XPath.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param xPath - An XPath expression that specifies the nodes you want returned. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getNodesAsync(xPath: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the XML inside this custom XML part.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getXmlAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes an event handler for the specified event type.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param eventType - Specifies the type of event to remove. Required.For a CustomXmlPart object event, the eventType parameter can be specified as Office.EventType.DataNodeDeleted, Office.EventType.DataNodeInserted, Office.EventType.DataNodeReplaced, or the corresponding text values of these enumerations.
         * @param options - Provides options to determine which event handler or handlers are removed.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        removeHandlerAsync(eventType: EventType, handler?: (result: any) => void, options?: RemoveHandlerOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Represents a collection of CustomXmlPart objects.
     *
     * @remarks
     * Hosts: Word
     *
     * Available in Requirement set: CustomXmlParts
     */
    export interface CustomXmlParts {
        /**
         * Asynchronously adds a new custom XML part to a file.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param xml - The XML to add to the newly created custom XML part.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addAsync(xml: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the specified custom XML part by its id.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param id - The GUID of the custom XML part, including opening and closing braces.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback..
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getByIdAsync(id: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the specified custom XML part(s) by its namespace.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * @param ns - The namespace URI.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getByNamespaceAsync(ns: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Represents a collection of CustomXmlPart objects.
     *
     * @remarks
     * Hosts: Word
     */
    export interface CustomXmlPrefixMappings {
        /**
         * Asynchronously adds a prefix to namespace mapping to use when querying an item.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * If no namespace is assigned to the requested prefix, the method returns an empty string ("").
         *
         * @param prefix - Specifies the prefix to add to the prefix mapping list. Required.
         * @param ns - Specifies the namespace URI to assign to the newly added prefix. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addNamespaceAsync(prefix: string, ns: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the namespace mapped to the specified prefix.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * If the prefix already exists in the namespace manager, this method will overwrite the mapping of that prefix except when the prefix is one added or used by the data store internally, in which case it will return an error.
         *
         * @param prefix - TSpecifies the prefix to get the namespace for. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getNamespaceAsync(prefix: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the prefix for the specified namespace.
         *
         * @remarks
         * Hosts: Word
         *
         * Available in Requirement set: CustomXmlParts
         *
         * If no prefix is assigned to the requested namespace, the method returns an empty string (""). If there are multiple prefixes specified in the namespace manager, the method returns the first prefix that matches the supplied namespace.
         *
         * @param ns - Specifies the namespace to get the prefix for. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getPrefixAsync(ns: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * An abstract class that represents the document the add-in is interacting with.
     *
     * @remarks
     * Hosts: Access, Excel, PowerPoint, Project, Word
     */
    export interface Document {
        /**
         * Gets an object that provides access to the bindings defined in the document.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * You don't instantiate the Document object directly in your script. To call members of the Document object to interact with the current document or worksheet, use Office.context.document in your script.
         */
        bindings: Bindings;
        /**
         * Gets an object that represents the custom XML parts in the document.
         *
         * @remarks
         * Hosts: Word
         */
        customXmlParts: CustomXmlParts;
        /**
         * Gets the mode the document is in.
         *
         * @remarks
         * Hosts: Word
         */
        mode: DocumentMode;
        /**
         * Gets an object that represents the saved custom settings of the content or task pane add-in for the current document.
         *
         * @remarks
         * Hosts: Word
         */
        settings: Settings;
        /**
         * Gets the URL of the document that the host application currently has open. Returns null if the URL is unavailable.
         *
         * @remarks
         * Hosts: Word
         */
        url: string;
        /**
         * Adds an event handler for a Document object event.
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Project, Word
         *
         * Available in Requirement set: DocumentEvents
         *
         * You can add multiple event handlers for the specified eventType as long as the name of each event handler function is unique.
         *
         * @param eventType - For a Document object event, the eventType parameter can be specified as Office.EventType.Document.SelectionChanged or Office.EventType.Document.ActiveViewChanged, or the corresponding text value of this enumeration.
         * @param handler - The event handler function to add, whose only parameter is of type DocumentSelectionChangedEventArgs. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the state of the current view of the presentation (edit or read).
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Word
         *
         * Available in Requirement set: ActiveView
         *
         * Can trigger an event when the view changes.
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback..
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getActiveViewAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the entire document file in slices of up to 4194304 bytes (4 MB). For add-ins for iOS, file slice is supported up to 65536 (64 KB). Note that specifying file slice size of above permitted limit will result in an "Internal Error" failure.
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Word
         *
         * Available in Requirement set: File
         *
         * For add-ins running in Office host applications other than Office for iOS, the getFileAsync method supports getting files in slices of up to 4194304 bytes (4 MB). For add-ins running in Office for iOS apps, the getFileAsync method supports getting files in slices of up to 65536 (64 KB).
         *
         * The fileType parameter can be specified by using the FileType enumeration or text values. But the possible values vary with the host:
         *
         * Excel Online, Win32, Mac, and iOS: Office.FileType.Compressed
         *
         * PowerPoint on Windows desktop, Mac, and iPad, and PowerPoint Online: Office.FileType.Compressed, Office.FileType.Pdf
         *
         * Word on Windows desktop, Word on Mac, and Word Online: Office.FileType.Compressed, Office.FileType.Pdf, Office.FileType.Text
         *
         * Word on iPad: Office.FileType.Compressed, Office.FileType.Text
         *
         * @param fileType - The format in which the file will be returned
         * @param options - Provides options for setting the size of slices that the document will be divided into.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getFileAsync(fileType: FileType, options?: GetFileOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets file properties of the current document.
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Word
         *
         * Available in Requirement set: not in a set
         *
         * You get the file's URL with the url property ( asyncResult.value.url).
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
        */
        getFilePropertiesAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Reads the data contained in the current selection in the document.
         *
         * @remarks
         * Hosts: Access, Excel, PowerPoint, Project, Word
         *
         * Available in Requirement set: Selection
         *
         * The possible values for the coercionType parameter vary by the host:
         *
         * Excel, Excel Online, PowerPoint, PowerPoint Online, Word, and Word Online only: Office.CoercionType.Text (string)
         *
         * Excel, Word, and Word Online only: Office.CoercionType.Matrix (array of arrays)
         *
         * Access, Excel, Word, and Word Online only: Office.CoercionType.Table (TableData object)
         *
         * Word only: Office.CoercionType.Html
         *
         * Word and Word Online only: Office.CoercionType.Ooxml (Office Open XML)
         *
         * PowerPoint and PowerPoint Online only: Office.CoercionType.SlideRange
         *
         * @param coercionType - The type of data structure to return.
         * @param options - Provides options for customizing what data is returned and how it is formatted.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getSelectedDataAsync(coercionType: CoercionType, options?: GetSelectedDataOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Goes to the specified object or location in the document.
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Word
         *
         * Available in Requirement set: not in a set
         *
         * PowerPoint doesn't support the goToByIdAsync method in Master Views.
         *
         * The behavior caused by the selectionMode option varies by host:
         *
         * In Excel: Office.SelectionMode.Selected selects all content in the binding, or named item. Office.SelectionMode.None for text bindings, selects the cell; for matrix bindings, table bindings, and named items, selects the first data cell (not first cell in header row for tables).
         *
         * In PowerPoint: Office.SelectionMode.Selected selects the slide title or first textbox on the slide. Office.SelectionMode.None Doesn't select anything.
         *
         * In Word: Office.SelectionMode.Selected selects all content in the binding. Office.SelectionMode.None for text bindings, moves the cursor to the beginning of the text; for matrix bindings and table bindings, selects the first data cell (not first cell in header row for tables).
         *
         * @param id - The identifier of the object or location to go to.
         * @param goToType - The type of the location to go to.
         * @param options - Provides options for whether to select the location that is navigated to.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        goToByIdAsync(id: string | number, goToType: GoToType, options?: GoToByIdOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes an event handler for the specified event type.
         *
         * @remarks
         * Hosts: Excel, PowerPoint, Project, Word
         *
         * Available in Requirement set: DocumentEvents
         *
         * @param eventType - The event type. For document can be 'Document.SelectionChanged' or 'Document.ActiveViewChanged'.
         * @param options - Provides options to determine which event handler or handlers are removed.         *
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        removeHandlerAsync(eventType: EventType, options?: RemoveHandlerOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Writes the specified data into the current selection.
         *
         * @remarks
         * Hosts: Access, Excel, PowerPoint, Project, Word, Word Online
         *
         * Available in Requirement set: Selection
         *
         * The possible CoercionTypes that can be used for the data parameter, or for the coercionType option, vary by host:
         *
         * Office.CoercionType.Text: Excel, Word, PowerPoint
         *
         * Office.CoercionType.Matrix: Excel, Word
         *
         * Office.CoercionType.Table: Access, Excel, Word
         *
         * Office.CoercionType.Html: Word
         *
         * Office.CoercionType.Ooxml: Word
         *
         * Office.CoercionType.Image: Excel, Word, PowerPoint
         *
         * @param data - The data to be set. Either a string or CoercionType value, 2d array or TableData object.
         * @param options - Provides options for how to insert data to the selection.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setSelectedDataAsync(data: string | TableData | any[][], options?: SetSelectedDataOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get Project field (Ex. ProjectWebAccessURL).
         * @param fieldId - Project level fields.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getProjectFieldAsync(fieldId: number, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get resource field for provided resource Id. (Ex.ResourceName)
         * @param resourceId - Either a string or value of the Resource Id.
         * @param fieldId - Resource Fields.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getResourceFieldAsync(resourceId: string, fieldId: number, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get the current selected Resource's Id.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getSelectedResourceAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get the current selected Task's Id.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getSelectedTaskAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get the current selected View Type (Ex. Gantt) and View Name.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getSelectedViewAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get the Task Name, WSS Task Id, and ResourceNames for given taskId.
         * @param taskId - Either a string or value of the Task Id.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getTaskAsync(taskId: string, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get task field for provided task Id. (Ex. StartDate).
         * @param taskId - Either a string or value of the Task Id.
         * @param fieldId - Task Fields.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getTaskFieldAsync(taskId: string, fieldId: number, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Project documents only. Get the WSS Url and list name for the Tasks List, the MPP is synced too.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getWSSUrlAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Provides information about the document that raised the SelectionChanged event.
     */
    export interface DocumentSelectionChangedEventArgs {
        /**
         * Gets a Document object that represents the document that raised the SelectionChanged event.
         */
        document: Document;
        /**
         * Get an EventType enumeration value that identifies the kind of event that was raised.
         */
        type: EventType;
    }
    /**
     * Represents the document file associated with an Office Add-in.
     *
     * @remarks
     * Access the File object with the AsyncResult.value property in the callback function passed to the Document.getFileAsync method.
     *
     * Hosts: PowerPoint, Word
     */
    export interface File {
        /**
         * Gets the document file size in bytes.
         *
         * @remarks
         * Hosts: PowerPoint, Word
         *
         * Available in Requirement set: File
         */
        size: number;
        /**
         * Gets the number of slices into which the file is divided.
         * @remarks
         * Hosts: PowerPoint, Word
         */
        sliceCount: number;
        /**
         * Closes the document file.
         * 
         * @remarks
         * 
         * No more than two documents are allowed to be in memory; otherwise the Document.getFileAsync operation will fail. Use the File.closeAsync method to close the file when you are finished working with it.
         * 
         * In the callback function passed to the closeAsync method, you can use the properties of the AsyncResult object to return the following information.
         * 
         * |Property |Use to...|
         * |---------|---------|
         * |AsyncResult.value|Always returns undefined because there is no object or data to retrieve.|
         * |AsyncResult.status|Determine the success or failure of the operation.|
         * |AsyncResult.error|Access an Error object that provides error information if the operation failed.|
         * |AsyncResult.asyncContext|A user-defined item of any type that is returned in the AsyncResult object without being altered.|
         *
         * Hosts: PowerPoint, Word
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult. When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.
         *
         * Available in Requirement set: File
         */
        closeAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the specified slice.
         * 
         * @remarks
         * 
         * In the callback function passed to the getSliceAsync method, you can use the properties of the AsyncResult object to return the following information.
         * 
         * |Property |Use to...|
         * |---------|---------|
         * |AsyncResult.value|Access the Slice object.|
         * |AsyncResult.status|Determine the success or failure of the operation.|
         * |AsyncResult.error|Access an Error object that provides error information if the operation failed.|
         * |AsyncResult.asyncContext|A user-defined item of any type that is returned in the AsyncResult object without being altered.|
         * 
         * Hosts: PowerPoint, Word
         * @param sliceIndex - Specifies the zero-based index of the slice to be retrieved. Required.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult. When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.
         *
         * Available in Requirement set: File
         */
        getSliceAsync(sliceIndex: number, callback?: (result: AsyncResult) => void): void;
    }
    export interface FileProperties {
        /**
         * File's URL
         */
        url: string
    }
    /**
    * Represents a binding in two dimensions of rows and columns.
    *
    * @remarks
         * Hosts: Excel, Word
    *
    * Available in Requirement set: MatrixBindings
    *
    * The MatrixBinding object inherits the id property, type property, getDataAsync method, and setDataAsync method from the Binding object.
    */
    export interface MatrixBinding extends Binding {
        /**
        * Gets the number of columns in the matrix data structure, as an integer value.
        *
        * @remarks
        * Hosts: Access, Excel, PowerPoint, Project, Word
        *
        * Available in Requirement set: MatrixBindings
        */
        columnCount: number;
        /**
        * Gets the number of rows in the matrix data structure, as an integer value.
        *
        * @remarks
        * Hosts: Access, Excel, PowerPoint, Project, Word
        *
        * Available in Requirement set: MatrixBindings
        */
        rowCount: number;
    }
    /**
     * Represents custom settings for a task pane or content add-in that are stored in the host document as name/value pairs.
     *
     * @remarks
     * The settings created by using the methods of the Settings object are saved per add-in and per document. That is, they are available only to the add-in that created them, and only from the document in which they are saved.
     *
     * The name of a setting is a string, while the value can be a string, number, boolean, null, object, or array.
     *
     * The Settings object is automatically loaded as part of the Document object, and is available by calling the settings property of that object when the add-in is activated. The developer is responsible for calling the saveAsync method after adding or deleting settings to save the settings in the document.
     *
     * Hosts: Access, Excel, PowerPoint, Word
     *
     * Available in Requirement set: Settings
     */
    export interface Settings {
        /**
         * Adds an event handler for the settingsChanged event.
         *
         * Important: Your add-in's code can register a handler for the settingsChanged event when the add-in is running with any Excel client, but the event will fire only when the add-in is loaded with a spreadsheet that is opened in Excel Online, and more than one user is editing the spreadsheet (co-authoring). Therefore, effectively the settingsChanged event is supported only in Excel Online in co-authoring scenarios.
         *
         * @remarks
         * You can add multiple event handlers for the specified eventType as long as the name of each event handler function is unique.
         * 
         * In the callback function passed to the addHandlerAsync method, you can use the properties of the AsyncResult object to return the following information.
         * 
         * |Property |Use to...|
         * |---------|---------|
         * |AsyncResult.value|Always returns undefined because there is no data or object to retrieve when adding an event handler.|
         * |AsyncResult.status|Determine the success or failure of the operation.|
         * |AsyncResult.error|Access an Error object that provides error information if the operation failed.|
         * |AsyncResult.asyncContext|A user-defined item of any type that is returned in the AsyncResult object without being altered.|
         *
         * Hosts: Excel
         *
         * Available in Requirement set: Settings
         *
         * @param eventType - Specifies the type of event to add. Required.
         * @param handler - The event handler function to add. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult. When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Retrieves the specified setting.
         *
         * @remarks
         * Hosts: Access, Excel, PowerPoint, Word
         *
         * Available in Requirement set: Settings
         *
         * @param settingName - The case-sensitive name of the setting to retrieve.
         * @returns An object that has property names mapped to JSON serialized values.
         */
        get(name: string): any;
        /**
         * Reads all settings persisted in the document and refreshes the content or task pane add-in's copy of those settings held in memory.
         *
         * @remarks
         * This method is useful in Word and PowerPoint coauthoring scenarios when multiple instances of the same add-in are working against the same document. Because each add-in is working against an in-memory copy of the settings loaded from the document at the time the user opened it, the settings values used by each user can get out of sync. This can happen whenever an instance of the add-in calls the Settings.saveAsync method to persist all of that user's settings to the document. Calling the refreshAsync method from the event handler for the settingsChanged event of the add-in will refresh the settings values for all users.
         * 
         * The refreshAsync method can be called from add-ins created for Excel, but since it doesn't support coauthoring there is no reason to do so.
         *
         * In the callback function passed to the refreshAsync method, you can use the properties of the AsyncResult object to return the following information.
         * 
         * |Property |Use to...|
         * |---------|---------|
         * |AsyncResult.value|Access a Settings object with the refreshed values.|
         * |AsyncResult.status|Determine the success or failure of the operation.|
         * |AsyncResult.error|Access an Error object that provides error information if the operation failed.|
         * |AsyncResult.asyncContext|A user-defined item of any type that is returned in the AsyncResult object without being altered.|
         * 
         * Hosts: Access, Excel, PowerPoint, Word
         *
         * Available in Requirement set: Settings
         *
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult. When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.

         */
        refreshAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Removes the specified setting.
         *
         * Important: Be aware that the Settings.remove method affects only the in-memory copy of the settings property bag. To persist the removal of the specified setting in the document, at some point after calling the Settings.remove method and before the add-in is closed, you must call the Settings.saveAsync method.
         *
         * @remarks
         * null is a valid value for a setting. Therefore, assigning null to the setting will not remove it from the settings property bag.
         *
         * Hosts: Access, Excel, PowerPoint, Word
         *
         * Available in Requirement set: Settings
         *
         * @param settingName - The case-sensitive name of the setting to remove.
         */
        remove(name: string): void;
        /**
         * Removes an event handler for the settingsChanged event.
         *
         * @remarks
         * If the optional handler parameter is omitted when calling the removeHandlerAsync method, all event handlers for the specified eventType will be removed.
         *
         * Hosts: Access, Excel, PowerPoint
         *
         * Available in Requirement set: Settings
         *
         * @param eventType - Specifies the type of event to remove. Required.
         * @param options - Provides options to determine which event handler or handlers are removed.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         * @remarks
         * When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.
         * In the callback function passed to the removeHandlerAsync method, you can use the properties of the AsyncResult object to return the following information.
         */
        removeHandlerAsync(eventType: EventType, options?: RemoveHandlerOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Persists the in-memory copy of the settings property bag in the document.
         * @remarks
         * Any settings previously saved by an add-in are loaded when it is initialized, so during the lifetime of the session you can just use the set and get methods to work with the in-memory copy of the settings property bag. When you want to persist the settings so that they are available the next time the add-in is used, use the saveAsync method.
         *
         * Note: The saveAsync method persists the in-memory settings property bag into the document file; however, the changes to the document file itself are saved only when the user (or AutoRecover setting) saves the document to the file system. The refreshAsync method is only useful in coauthoring scenarios (which are only supported in Word) when other instances of the same add-in might change the settings and those changes should be made available to all instances.
         * 
         * In the callback function passed to the saveAsync method, you can use the properties of the AsyncResult object to return the following information.
         * 
         * |Property |Use to...|
         * |---------|---------|
         * |AsyncResult.value|Always returns undefined because there is no object or data to retrieve.|
         * |AsyncResult.status|Determine the success or failure of the operation.|
         * |AsyncResult.error|Access an Error object that provides error information if the operation failed.|
         * |AsyncResult.asyncContext|A user-defined item of any type that is returned in the AsyncResult object without being altered.|
         *
         * Hosts: Access, Excel, PowerPoint, Word
         * @param options - Provides options for saving settings.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult. When the function you passed to the callback parameter executes, it receives an AsyncResult object that you can access from the callback function's only parameter.
         */
        saveAsync(options?: SaveSettingsOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets or creates the specified setting.
         *
         * Important: Be aware that the Settings.set method affects only the in-memory copy of the settings property bag. To make sure that additions or changes to settings will be available to your add-in the next time the document is opened, at some point after calling the Settings.set method and before the add-in is closed, you must call the Settings.saveAsync method to persist settings in the document.
         *
         * @remarks
         * The set method creates a new setting of the specified name if it does not already exist, or sets an existing setting of the specified name in the in-memory copy of the settings property bag. After you call the Settings.saveAsync method, the value is stored in the document as the serialized JSON representation of its data type. A maximum of 2MB is available for the settings of each add-in.
         *
         * Hosts: Access, Excel, PowerPoint, Word
         *
         * Available in Requirement set: Settings
         *
         * @param settingName - The case-sensitive name of the setting to set or create.
         * @param value - Specifies the value to be stored.
         */
        set(name: string, value: any): void;
    }
    /**
     * Represents a slice of a document file.
     *
     * @remarks
     * The Slice object is accessed with the File.getSliceAsync method.
     *
     * Hosts: PowerPoint, Word
     *
     * Available in Requirement set: File
     */
    export interface Slice {
        /**
         * Gets the raw data of the file slice in Office.FileType.Text ("text") or Office.FileType.Compressed ("compressed") format as specified by the fileType parameter of the call to the Document.getFileAsync method.
         *
         * @remarks
         * Files in the "compressed" format will return a byte array that can be transformed to a base64-encoded string if required.
         *
         * Hosts: PowerPoint, Word
         *
         * Available in Requirement set: File
         */
        data: any;
        /**
         * Gets the zero-based index of the file slice.
         *
         * @remarks
         * Hosts: PowerPoint, Word
         *
         * Available in Requirement set: File
         */
        index: number;
        /**
         * Gets the size of the slice in bytes.
         *
         * @remarks
         * Hosts: PowerPoint, Word
         *
         * Available in Requirement set: File
         */
        size: number;
    }
    /**
    * Represents a binding in two dimensions of rows and columns, optionally with headers.
    *
    * @remarks
    * Hosts: Access, Excel, PowerPoint, Project, Word
    *
    * Available in Requirement set: TableBindings
    *
    * The TableBinding object inherits the id property, type property, getDataAsync method, and setDataAsync method from the Binding object.
    *
    * For Excel, note that after you establish a table binding in Excel, each new row a user adds to the table is automatically included in the binding and rowCount increases.
    */
    export interface TableBinding extends Binding {
        /**
        * Gets the number of columns in the TableBinding, as an integer value.
        *
        * @remarks
        * Hosts: Access, Excel,Word
        *
        * Available in Requirement set: TableBindings
        */
        columnCount: number;
        /**
        * True, if the table has headers; otherwise false.
        *
        * @remarks
        * Hosts: Access, Excel, PowerPoint, Project, Word
        *
        * Available in Requirement set: TableBindings
        */
        hasHeaders: boolean;
         /**
        * Gets the number of rows in the TableBinding, as an integer value.
        *
        * @remarks
        * Hosts: Access, Excel,Word
        *
        * Available in Requirement set: TableBindings
        *
        * When you insert an empty table by selecting a single row in Excel 2013 and Excel Online (using Table on the Insert tab), both Office host applications create a single row of headers followed by a single blank row. However, if your add-in's script creates a binding for this newly inserted table (for example, by using the addFromSelectionAsync method), and then checks the value of the rowCount property, the value returned will differ depending whether the spreadsheet is open in Excel 2013 or Excel Online.

        * - In Excel on the desktop, rowCount will return 0 (the blank row following the headers is not counted).
        *
        * - In Excel Online, rowCount will return 1 (the blank row following the headers is counted).
        *
        * You can work around this difference in your script by checking if rowCount == 1, and if so, then checking if the row contains all empty strings.
        *
        * In content add-ins for Access, for performance reasons the rowCount property always returns -1.
        */
        rowCount: number;
        /**
         * Adds the specified data to the table as additional columns.
         *
         * @remarks
         * Hosts: Excel, Word
         *
         * Available in Requirement set: TableBindings
         *
         * To add one or more columns specifying the values of the data and headers, pass a TableData object as the data parameter. To add one or more columns specifying only the data, pass an array of arrays ("matrix") as the data parameter.
         *
         * The success or failure of an addColumnsAsync operation is atomic. That is, the entire add columns operation must succeed, or it will be completely rolled back (and the AsyncResult.status property returned to the callback will report failure):
         *
         *  - Each row in the array you pass as the data argument must have the same number of rows as the table being updated. If not, the entire operation will fail.
         *
         *  - Each row and cell in the array must successfully add that row or cell to the table in the newly added column(s). If any row or cell fails to be set for any reason, the entire operation will fail.
         *
         *  - If you pass a TableData object as the data argument, the number of header rows must match that of the table being updated.
         *
         * Additional remark for Excel Online: The total number of cells in the TableData object passed to the data parameter can't exceed 20,000 in a single call to this method.
         *
         * @param tableData - An array of arrays ("matrix") or a TableData object that contains one or more columns of data to add to the table. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addColumnsAsync(tableData: TableData | any[][], options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Adds the specified data to the table as additional rows.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: TableBindings
         *
         * To add one or more columns specifying the values of the data and headers, pass a TableData object as the data parameter. To add one or more columns specifying only the data, pass an array of arrays ("matrix") as the data parameter.
         *
         * The success or failure of an addRowsAsync operation is atomic. That is, the entire add columns operation must succeed, or it will be completely rolled back (and the AsyncResult.status property returned to the callback will report failure):
         *
         *  - Each row in the array you pass as the data argument must have the same number of columns as the table being updated. If not, the entire operation will fail.
         *
         *  - Each column and cell in the array must successfully add that column or cell to the table in the newly added rows(s). If any column or cell fails to be set for any reason, the entire operation will fail.
         *
         *  - If you pass a TableData object as the data argument, the number of header rows must match that of the table being updated.
         *
         * Additional remark for Excel Online: The total number of cells in the TableData object passed to the data parameter can't exceed 20,000 in a single call to this method.
         *
         * @param rows - An array of arrays ("matrix") or a TableData object that contains one or more rows of data to add to the table. Required.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addRowsAsync(rows: TableData | any[][], options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Deletes all non-header rows and their values in the table, shifting appropriately for the host application.
         *
         * @remarks
         * Hosts: Access, Excel, Word
         *
         * Available in Requirement set: TableBindings
         *
         * In Excel, if the table has no header row, this method will delete the table itself.
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        deleteAllDataValuesAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Clears formatting on the bound table.
         *
         * @remarks
         * Hosts: Excel
         *
         * Available in Requirement set: Not in a set
         *
         * See {@link https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-tables#format-a-table | Format tables in add-ins for Excel} for more information.
         *
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        clearFormatsAsync(options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the formatting on specified items in the table.
         * @param cellReference - An object literal containing name-value pairs that specify the range of cells to get formatting from.
         * @param formats - An array specifying the format properties to get.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getFormatsAsync(cellReference?: any, formats?: any[], options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets formatting on specified items and data in the table.
         *
         * @remarks
         * Hosts: Excel
         *
         * Available in Requirement set: Not in a set
         *
         * @param formatsInfo - Array elements are themselves three-element arrays:[target, type, formats]
         *
         *       target: The identifier of the item to format. String.
         *
         *       type: The kind of item to format. String.
         *
         *       formats: An object literal containing a list of property name-value pairs that define the formatting to apply.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setFormatsAsync(formatsInfo?: any[], options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Updates table formatting options on the bound table.
         *
         * @remarks
         * Hosts: Excel
         *
         * Available in Requirement set: Not in a set
         *
         * @param tableOptions - An object literal containing a list of property name-value pairs that define the table options to apply.
         * @param options - Provides an option for preserving context data of any type, unchanged, for use in a callback.
         * @param callback - Optional. A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        setTableOptionsAsync(tableOptions: any, options?: AsyncContextOptions, callback?: (result: AsyncResult) => void): void;
    }
    /**
     * Represents the data in a table or a TableBinding.
     *
     * @remarks
     * Hosts: Excel, Word
     *
     * Available in Requirement set: TableBindings
     */
    export class TableData {
        constructor(rows: any[][], headers: any[]);
        constructor();
        /**
         * Gets or sets the headers of the table.
         * @remarks
         * To specify headers, you must specify an array of arrays that corresponds to the structure of the table. For example, to specify headers for a two-column table you would set the header property to [['header1', 'header2']].
         *
         * If you specify null for the headers property (or leaving the property empty when you construct a TableData object), the following results occur when your code executes:
         *
         * - If you insert a new table, the default column headers for the table are created.
         *
         * - If you overwrite or update an existing table, the existing headers are not altered.
         *
         * Hosts: Excel, Word
         *
         * Available in Requirement set: TableBindings
         */
        headers: any[];
        /**
         * Gets or sets the rows in the table. Returns an array of arrays that contains the data in the table. Returns an empty array ``, if there are no rows.
         * @remarks
         * To specify rows, you must specify an array of arrays that corresponds to the structure of the table. For example, to specify two rows of string values in a two-column table you would set the rows property to [['a', 'b'], ['c', 'd']].
         *
         * If you specify null for the rows property (or leave the property empty when you construct a TableData object), the following results occur when your code executes:
         *
         * - If you insert a new table, a blank row will be inserted.
         *
         * - If you overwrite or update an existing table, the existing rows are not altered.
         *
         * Hosts: Excel, Word
         *
         * Available in Requirement set: TableBindings
         */
        rows: any[][];
    }
    /**
     * Specifies enumerated values for the cells: property in the cellFormat parameter of {@link https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-tables#format-a-table | table formatting methods}.
     *
     * @remarks
     * Hosts: Excel
     */
    enum Table {
        /**
         * The entire table, including column headers, data, and totals (if any).
         */
        All,
        /**
         * Only the data (no headers and totals).
         */
        Data,
        /**
         * Only the header row.
         */
        Headers
    }
    /**
    * Represents a bound text selection in the document.
    *
    * @remarks
    * Hosts: Access, Excel, PowerPoint, Project, Word
    *
    * Available in Requirement set: TextBindings
    *
    * The TextBinding object inherits the id property, type property, getDataAsync method, and setDataAsync method from the Binding object. It does not implement any additional properties or methods of its own.
    */
    export interface TextBinding extends Binding { }
    /**
     * Specifies the project fields that are available as a parameter for the getProjectFieldAsync method.
     *
     * @remarks
     * A ProjectProjectFields constant can be used as a parameter of the getProjectFieldAsync method.
     *
     * Hosts: Project
     */
    enum ProjectProjectFields {
        /**
         * The number of digits after the decimal for the currency.
         */
        CurrencyDigits,
        /**
         * The currency symbol.
         */
        CurrencySymbol,
        /**
         * The placement of the currency symbol: Not specified = -1; Before the value with no space ($0) = 0; After the value with no space (0$) = 1; Before the value with a space ($ 0) = 2; After the value with a space (0 $) = 3.
         */
        CurrencySymbolPosition,
        DurationUnits,
        /**
         * The GUID of the project.
         */
        GUID,
        /**
         * The project finish date.
         */
        Finish,
        /**
         * The project start date.
         */
        Start,
        /**
         * Specifies whether the project is read-only.
         */
        ReadOnly,
        /**
         * The project version.
         */
        VERSION,
        /**
         * The work units of the project, such as days or hours.
         */
        WorkUnits,
        /**
         * The Project Web App URL, for projects that are stored in Project Server.
         */
        ProjectServerUrl,
        /**
         * The SharePoint URL, for projects that are synchronized with a SharePoint list.
         */
        WSSUrl,
        /**
         * The name of the SharePoint list, for projects that are synchronized with a tasks list.
         */
        WSSList
    }
    /**
     * Specifies the resource fields that are available as a parameter for the getResourceFieldAsync method.
     *
     * @remarks
     * A ProjectResourceFields constant can be used as a parameter of the getResourceFieldAsync method.
     *
     * For more information about working with fields in Project, see {@link https://support.office.com/article/Available-fields-reference-615a4563-1cc3-40f4-b66f-1b17e793a460 | Available fields} reference. In Project Help, search for Available fields.
     */
    enum ProjectResourceFields {
        /**
         * The accrual method that defines how a task accrues the cost of the resource: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Accrual,
        /**
         * The calculated actual cost of the resource for assignments in the project.
         */
        ActualCost,
        /**
         * The actual overtime cost for a resource.
         */
        ActualOvertimeCost,
        /**
         * The actual overtime work for a resource, in minutes.
         */
        ActualOvertimeWork,
        /**
         * The actual overtime work for the resource that has been protected (made read-only).
         */
        ActualOvertimeWorkProtected,
        /**
         * The actual work that the resource has done on assignments in the project.
         */
        ActualWork,
        /**
         * The actual work for the resource that has been protected (made read-only).
         */
        ActualWorkProtected,
        /**
         * The name of the base calendar for the resource.
         */
        BaseCalendar,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline10BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline10BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline10Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline10Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline1BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline1BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline1Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline1Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline2BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline2BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline2Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline2Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline3BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline3BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline3Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline3Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline4BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline4BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline4Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline4Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline5BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline5BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline5Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline5Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline6BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline6BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline6Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline6Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline7BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline7BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline7Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline7Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline8BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline8BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline8Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline8Work,
        /**
         * The budget cost for the baseline resource.
         */
        Baseline9BudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        Baseline9BudgetWork,
        /**
         * The cost for the baseline resource.
         */
        Baseline9Cost,
        /**
         * The work for the baseline resource, in minutes.
         */
        Baseline9Work,
        /**
         * The budget cost for the baseline resource.
         */
        BaselineBudgetCost,
        /**
         * The budget work for the baseline resource, in hours.
         */
        BaselineBudgetWork,
        /**
         * The baseline cost for the resource for assignments in the project.
         */
        BaselineCost,
        /**
         * The baseline work for the resource for assignments in the project, in minutes.
         */
        BaselineWork,
        /**
         * The budget cost for the resource.
         */
        BudgetCost,
        /**
         * The budget work for the resource.
         */
        BudgetWork,
        /**
         * The GUID of the resource calendar.
         */
        ResourceCalendarGUID,
        /**
         * The code value of the resource.
         */
        Code,
        /**
         * A cost field for the resource.
         */
        Cost1,
        /**
         * A cost field for the resource.
         */
        Cost10,
        /**
         * A cost field for the resource.
         */
        Cost2,
        /**
         * A cost field for the resource.
         */
        Cost3,
        /**
         * A cost field for the resource.
         */
        Cost4,
        /**
         * A cost field for the resource.
         */
        Cost5,
        /**
         * A cost field for the resource.
         */
        Cost6,
        /**
         * A cost field for the resource.
         */
        Cost7,
        /**
         * A cost field for the resource.
         */
        Cost8,
        /**
         * A cost field for the resource.
         */
        Cost9,
        /**
         * The date the resource was created.
         */
        ResourceCreationDate,
        /**
         * A date field for the resource.
         */
        Date1,
        /**
         * A date field for the resource.
         */
        Date10,
        /**
         * A date field for the resource.
         */
        Date2,
        /**
         * A date field for the resource.
         */
        Date3,
        /**
         * A date field for the resource.
         */
        Date4,
        /**
         * A date field for the resource.
         */
        Date5,
        /**
         * A date field for the resource.
         */
        Date6,
        /**
         * A date field for the resource.
         */
        Date7,
        /**
         * A date field for the resource.
         */
        Date8,
        /**
         * A date field for the resource.
         */
        Date9,
        /**
         * A duration field for the resource.
         */
        Duration1,
        /**
         * A duration field for the resource.
         */
        Duration10,
        /**
         * A duration field for the resource.
         */
        Duration2,
        /**
         * A duration field for the resource.
         */
        Duration3,
        /**
         * A duration field for the resource.
         */
        Duration4,
        /**
         * A duration field for the resource.
         */
        Duration5,
        /**
         * A duration field for the resource.
         */
        Duration6,
        /**
         * A duration field for the resource.
         */
        Duration7,
        /**
         * A duration field for the resource.
         */
        Duration8,
        /**
         * A duration field for the resource.
         */
        Duration9,
        /**
         * The email address of the resource.
         */
        Email,
        /**
         * The end date of the resource availability.
         */
        End,
        /**
         * A finish field for the task.
         */
        Finish1,
        /**
         * A finish field for the task.
         */
        Finish10,
        /**
         * A finish field for the task.
         */
        Finish2,
        /**
         * A finish field for the task.
         */
        Finish3,
        /**
         * A finish field for the task.
         */
        Finish4,
        /**
         * A finish field for the task.
         */
        Finish5,
        /**
         * A finish field for the task.
         */
        Finish6,
        /**
         * A finish field for the task.
         */
        Finish7,
        /**
         * A finish field for the task.
         */
        Finish8,
        /**
         * A finish field for the task.
         */
        Finish9,
        /**
         * A Boolean flag field for the resource.
         */
        Flag10,
        /**
         * A Boolean flag field for the resource.
         */
        Flag1,
        /**
         * A Boolean flag field for the resource.
         */
        Flag11,
        /**
         * A Boolean flag field for the resource.
         */
        Flag12,
        /**
         * A Boolean flag field for the resource.
         */
        Flag13,
        /**
         * A Boolean flag field for the resource.
         */
        Flag14,
        /**
         * A Boolean flag field for the resource.
         */
        Flag15,
        /**
         * A Boolean flag field for the resource.
         */
        Flag16,
        /**
         * A Boolean flag field for the resource.
         */
        Flag17,
        /**
         * A Boolean flag field for the resource.
         */
        Flag18,
        /**
         * A Boolean flag field for the resource.
         */
        Flag19,
        /**
         * A Boolean flag field for the resource.
         */
        Flag2,
        /**
         * A Boolean flag field for the resource.
         */
        Flag20,
        /**
         * A Boolean flag field for the resource.
         */
        Flag3,
        /**
         * A Boolean flag field for the resource.
         */
        Flag4,
        /**
         * A Boolean flag field for the resource.
         */
        Flag5,
        /**
         * A Boolean flag field for the resource.
         */
        Flag6,
        /**
         * A Boolean flag field for the resource.
         */
        Flag7,
        /**
         * A Boolean flag field for the resource.
         */
        Flag8,
        /**
         * A Boolean flag field for the resource.
         */
        Flag9,
        /**
         * The group the resource belongs to.
         */
        Group,
        /**
         * The percentage of work units that the resource has assigned in the project. If the resource is working full-time on the project, Units = 100.
         */
        Units,
        /**
         * The name of the resource.
         */
        Name,
        /**
         * The text value of the notes regarding the resource.
         */
        Notes,
        /**
         * A number field for the resource.
         */
        Number1,
        /**
         * A number field for the resource.
         */
        Number10,
        /**
         * A number field for the resource.
         */
        Number11,
        /**
         * A number field for the resource.
         */
        Number12,
        /**
         * A number field for the resource.
         */
        Number13,
        /**
         * A number field for the resource.
         */
        Number14,
        /**
         * A number field for the resource.
         */
        Number15,
        /**
         * A number field for the resource.
         */
        Number16,
        /**
         * A number field for the resource.
         */
        Number17,
        /**
         * A number field for the resource.
         */
        Number18,
        /**
         * A number field for the resource.
         */
        Number19,
        /**
         * A number field for the resource.
         */
        Number2,
        /**
         * A number field for the resource.
         */
        Number20,
        /**
         * A number field for the resource.
         */
        Number3,
        /**
         * A number field for the resource.
         */
        Number4,
        /**
         * A number field for the resource.
         */
        Number5,
        /**
         * A number field for the resource.
         */
        Number6,
        /**
         * A number field for the resource.
         */
        Number7,
        /**
         * A number field for the resource.
         */
        Number8,
        /**
         * A number field for the resource.
         */
        Number9,
        /**
         * The overtime cost for a resource.
         */
        OvertimeCost,
        /**
         * The overtime rate for a resource.
         */
        OvertimeRate,
        /**
         * The overtime work for a resource.
         */
        OvertimeWork,
        /**
         * The percentage of work complete for a resource.
         */
        PercentWorkComplete,
        /**
         * The cost per use of the resource.
         */
        CostPerUse,
        /**
         * Indicates whether the resource is a generic resource (identified by skill rather than by name).
         */
        Generic,
        /**
         * Indicates whether the resource is overallocated.
         */
        OverAllocated,
        /**
         * The amount of regular work for the resource.
         */
        RegularWork,
        /**
         * The remaining cost for the resource.
         */
        RemainingCost,
        /**
         * The remaining overtime cost for the resource.
         */
        RemainingOvertimeCost,
        /**
         * The remaining overtime work for the resource, in minutes.
         */
        RemainingOvertimeWork,
        /**
         * The remaining work for the resource, in minutes.
         */
        RemainingWork,
        /**
         * The ID of the resource.
         */
        ResourceGUID,
        /**
         * The total cost of the resource.
         */
        Cost,
        /**
         * The total work for the resource, in minutes.
         */
        Work,
        /**
         * The start date for the resource.
         */
        Start,
        /**
         * A start field for the resource.
         */
        Start1,
        /**
         * A start field for the resource.
         */
        Start10,
        /**
         * A start field for the resource.
         */
        Start2,
        /**
         * A start field for the resource.
         */
        Start3,
        /**
         * A start field for the resource.
         */
        Start4,
        /**
         * A start field for the resource.
         */
        Start5,
        /**
         * A start field for the resource.
         */
        Start6,
        /**
         * A start field for the resource.
         */
        Start7,
        /**
         * A start field for the resource.
         */
        Start8,
        /**
         * A start field for the resource.
         */
        Start9,
        /**
         * The standard rate of pay for the resource, in cost per hour.
         */
        StandardRate,
        /**
         * A text field for the resource.
         */
        Text1,
        /**
         * A text field for the resource.
         */
        Text10,
        /**
         * A text field for the resource.
         */
        Text11,
        /**
         * A text field for the resource.
         */
        Text12,
        /**
         * A text field for the resource.
         */
        Text13,
        /**
         * A text field for the resource.
         */
        Text14,
        /**
         * A text field for the resource.
         */
        Text15,
        /**
         * A text field for the resource.
         */
        Text16,
        /**
         * A text field for the resource.
         */
        Text17,
        /**
         * A text field for the resource.
         */
        Text18,
        /**
         * A text field for the resource.
         */
        Text19,
        /**
         * A text field for the resource.
         */
        Text2,
        /**
         * A text field for the resource.
         */
        Text20,
        /**
         * A text field for the resource.
         */
        Text21,
        /**
         * A text field for the resource.
         */
        Text22,
        /**
         * A text field for the resource.
         */
        Text23,
        /**
         * A text field for the resource.
         */
        Text24,
        /**
         * A text field for the resource.
         */
        Text25,
        /**
         * A text field for the resource.
         */
        Text26,
        /**
         * A text field for the resource.
         */
        Text27,
        /**
         * A text field for the resource.
         */
        Text28,
        /**
         * A text field for the resource.
         */
        Text29,
        /**
         * A text field for the resource.
         */
        Text3,
        /**
         * A text field for the resource.
         */
        Text30,
        /**
         * A text field for the resource.
         */
        Text4,
        /**
         * A text field for the resource.
         */
        Text5,
        /**
         * A text field for the resource.
         */
        Text6,
        /**
         * A text field for the resource.
         */
        Text7,
        /**
         * A text field for the resource.
         */
        Text8,
        /**
         * A text field for the resource.
         */
        Text9
    }
    /**
     * Specifies the task fields that are available as a parameter for the getTaskFieldAsync method.
     *
     * @remarks
     * A ProjectTaskFields constant can be used as a parameter of the getTaskFieldAsync method.
     *
     * For more information about working with fields in Project, see the {@link https://support.office.com/article/Available-fields-reference-615a4563-1cc3-40f4-b66f-1b17e793a460 | Available fields} reference. In Project Help, search for Available fields.
     *
     * Hosts: Project
     */
    enum ProjectTaskFields {
        /**
         * The current actual cost for the task.
         */
        ActualCost,
        /**
         * The actual duration of the task, in minutes.
         */
        ActualDuration,
        /**
         * The actual finish date of the task.
         */
        ActualFinish,
        /**
         * The actual overtime cost for the task.
         */
        ActualOvertimeCost,
        /**
         * The actual overtime work for the task, in minutes.
         */
        ActualOvertimeWork,
        /**
         * The actual start date of the task.
         */
        ActualStart,
        /**
         * The actual work for the task, in minutes.
         */
        ActualWork,
        /**
         * A text field for the task.
         */
        Text1,
        /**
         * A text field for the task.
         */
        Text10,
        /**
         * A finish field for the task.
         */
        Finish10,
        /**
         * A start field for the task.
         */
        Start10,
        /**
         * A text field for the task.
         */
        Text11,
        /**
         * A text field for the task.
         */
        Text12,
        /**
         * A text field for the task.
         */
        Text13,
        /**
         * A text field for the task.
         */
        Text14,
        /**
         * A text field for the task.
         */
        Text15,
        /**
         * A text field for the task.
         */
        Text16,
        /**
         * A text field for the task.
         */
        Text17,
        /**
         * A text field for the task.
         */
        Text18,
        /**
         * A text field for the task.
         */
        Text19,
        /**
         * A finish field for the task.
         */
        Finish1,
        /**
         * A start field for the task.
         */
        Start1,
        /**
         * A text field for the task.
         */
        Text2,
        /**
         * A text field for the task.
         */
        Text20,
        /**
         * A text field for the task.
         */
        Text21,
        /**
         * A text field for the task.
         */
        Text22,
        /**
         * A text field for the task.
         */
        Text23,
        /**
         * A text field for the task.
         */
        Text24,
        /**
         * A text field for the task.
         */
        Text25,
        /**
         * A text field for the task.
         */
        Text26,
        /**
         * A text field for the task.
         */
        Text27,
        /**
         * A text field for the task.
         */
        Text28,
        /**
         * A text field for the task.
         */
        Text29,
        /**
         * A finish field for the task.
         */
        Finish2,
        /**
         * A start field for the task.
         */
        Start2,
        /**
         * A text field for the task.
         */
        Text3,
        /**
         * A text field for the task.
         */
        Text30,
        /**
         * A finish field for the task.
         */
        Finish3,
        /**
         * A start field for the task.
         */
        Start3,
        /**
         * A text field for the task.
         */
        Text4,
        /**
         * A finish field for the task.
         */
        Finish4,
        /**
         * A start field for the task.
         */
        Start4,
        /**
         * A text field for the task.
         */
        Text5,
        /**
         * A finish field for the task.
         */
        Finish5,
        /**
         * A start field for the task.
         */
        Start5,
        /**
         * A text field for the task.
         */
        Text6,
        /**
         * A finish field for the task.
         */
        Finish6,
        /**
         * A start field for the task.
         */
        Start6,
        /**
         * A text field for the task.
         */
        Text7,
        /**
         * A finish field for the task.
         */
        Finish7,
        /**
         * A start field for the task.
         */
        Start7,
        /**
         * A text field for the task.
         */
        Text8,
        /**
         * A finish field for the task.
         */
        Finish8,
        /**
         * A start field for the task.
         */
        Start8,
        /**
         * A text field for the task.
         */
        Text9,
        /**
         * A finish field for the task.
         */
        Finish9,
        /**
         * A start field for the task.
         */
        Start9,
        /**
         * The budget cost for the baseline task.
         */
        Baseline10BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline10BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline10Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline10Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline10Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline10FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline10FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline10Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline10Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline1BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline1BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline1Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline1Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline1Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline1FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline1FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline1Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline1Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline2BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline2BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline2Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline2Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline2Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline2FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline2FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline2Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline2Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline3BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline3BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline3Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline3Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline3Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline3FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline3FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Basline3Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline3Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline4BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline4BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline4Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline4Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline4Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline4FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline4FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline4Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline4Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline5BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline5BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline5Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline5Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline5Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline5FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline5FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline5Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline5Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline6BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline6BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline6Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline6Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline6Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline6FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline6FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline6Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline6Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline7BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline7BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline7Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline7Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline7Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline7FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline7FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline7Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline7Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline8BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline8BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline8Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline8Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline8Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline8FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline8FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline8Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline8Work,
        /**
         * The budget cost for the baseline task.
         */
        Baseline9BudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        Baseline9BudgetWork,
        /**
         * The cost for the baseline task.
         */
        Baseline9Cost,
        /**
         * The duration for the baseline task, in minutes.
         */
        Baseline9Duration,
        /**
         * The finish date for the baseline task.
         */
        Baseline9Finish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        Baseline9FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        Baseline9FixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        Baseline9Start,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        Baseline9Work,
        /**
         * The budget cost for the baseline task.
         */
        BaselineBudgetCost,
        /**
         * The budget work for the baseline task, in hours.
         */
        BaselineBudgetWork,
        /**
         * The cost for the baseline task.
         */
        BaselineCost,
        /**
         * The duration for the baseline task, in minutes.
         */
        BaselineDuration,
        /**
         * The finish date for the baseline task.
         */
        BaselineFinish,
        /**
         * The fixed cost of any non-resource expense for the baseline task.
         */
        BaselineFixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        BaselineFixedCostAccrual,
        /**
         * The start date for the baseline task.
         */
        BaselineStart,
        /**
         * The total person-hours scheduled for the baseline task, in minutes.
         */
        BaselineWork,
        /**
         * The budget cost for the task.
         */
        BudgetCost,
        BudgetFixedCost,
        BudgetFixedWork,
        /**
        * The budget work for the task, in hours.
        */
        BudgetWork,
        /**
         * The GUID of the task calendar.
         */
        TaskCalendarGUID,
        /**
         * A constraint date for the task.
         */
        ConstraintDate,
        /**
         * A constraint type for the task: As Soon As Possible = 0, As Late As Possible = 1, Must Start On = 2, Must Finish On = 3, Start No Earlier Than = 4, Start No Later Than = 5, Finish No Earlier Than = 6, Finish No Later Than = 7.
         */
        ConstraintType,
        /**
         * A cost field of the task.
         */
        Cost1,
        /**
         * A cost field of the task.
         */
        Cost10,
        /**
         * A cost field of the task.
         */
        Cost2,
        /**
         * A cost field of the task.
         */
        Cost3,
        /**
         * A cost field of the task.
         */
        Cost4,
        /**
         * A cost field of the task.
         */
        Cost5,
        /**
         * A cost field of the task.
         */
        Cost6,
        /**
         * A cost field of the task.
         */
        Cost7,
        /**
         * A cost field of the task.
         */
        Cost8,
        /**
         * A cost field of the task.
         */
        Cost9,
        /**
         * A date field of the task.
         */
        Date1,
        /**
         * A date field of the task.
         */
        Date10,
        /**
         * A date field of the task.
         */
        Date2,
        /**
         * A date field of the task.
         */
        Date3,
        /**
         * A date field of the task.
         */
        Date4,
        /**
         * A date field of the task.
         */
        Date5,
        /**
         * A date field of the task.
         */
        Date6,
        /**
         * A date field of the task.
         */
        Date7,
        /**
         * A date field of the task.
         */
        Date8,
        /**
         * A date field of the task.
         */
        Date9,
        /**
         * The deadline for a task.
         */
        Deadline,
        /**
         * A duration field of the task.
         */
        Duration1,
        /**
         * A duration field of the task.
         */
        Duration10,
        /**
         * A duration field of the task.
         */
        Duration2,
        /**
         * A duration field of the task.
         */
        Duration3,
        /**
         * A duration field of the task.
         */
        Duration4,
        /**
         * A duration field of the task.
         */
        Duration5,
        /**
         * A duration field of the task.
         */
        Duration6,
        /**
         * A duration field of the task.
         */
        Duration7,
        /**
         * A duration field of the task.
         */
        Duration8,
        /**
         * A duration field of the task.
         */
        Duration9,
        /**
         * A duration field of the task.
         */
        Duration,
        /**
         * The method for calculating earned value for the task.
         */
        EarnedValueMethod,
        /**
         * The duration between the Early Finish and Late Finish dates for the task, in minutes.
         */
        FinishSlack,
        /**
         * The fixed cost for the task.
         */
        FixedCost,
        /**
         * The accrual method that defines how the baseline task accrues fixed costs: Accrues when the task starts = 1, accrues when the task ends = 2, accrues as the task progresses (prorated) = 3.
         */
        FixedCostAccrual,
        /**
         * A Boolean flag field for the task.
         */
        Flag10,
        /**
         * A Boolean flag field for the task.
         */
        Flag1,
        /**
         * A Boolean flag field for the task.
         */
        Flag11,
        /**
         * A Boolean flag field for the task.
         */
        Flag12,
        /**
         * A Boolean flag field for the task.
         */
        Flag13,
        /**
         * A Boolean flag field for the task.
         */
        Flag14,
        /**
         * A Boolean flag field for the task.
         */
        Flag15,
        /**
         * A Boolean flag field for the task.
         */
        Flag16,
        /**
         * A Boolean flag field for the task.
         */
        Flag17,
        /**
         * A Boolean flag field for the task.
         */
        Flag18,
        /**
         * A Boolean flag field for the task.
         */
        Flag19,
        /**
         * A Boolean flag field for the task.
         */
        Flag2,
        /**
         * A Boolean flag field for the task.
         */
        Flag20,
        /**
         * A Boolean flag field for the task.
         */
        Flag3,
        /**
         * A Boolean flag field for the task.
         */
        Flag4,
        /**
         * A Boolean flag field for the task.
         */
        Flag5,
        /**
         * A Boolean flag field for the task.
         */
        Flag6,
        /**
         * A Boolean flag field for the task.
         */
        Flag7,
        /**
         * A Boolean flag field for the task.
         */
        Flag8,
        /**
         * A Boolean flag field for the task.
         */
        Flag9,
        /**
         * The amount of time that the task can be delayed without delaying its successor tasks.
         */
        FreeSlack,
        /**
         * Indicates whether the task has rollup subtasks.
         */
        HasRollupSubTasks,
        /**
         * The index of the selected task. After the project summary task, the index of the first task in a project is 1.
         */
        ID,
        /**
         * The name of the task.
         */
        Name,
        /**
         * The text value of the notes regarding the task.
         */
        Notes,
        /**
         * A number field for the task.
         */
        Number1,
        /**
         * A number field for the task.
         */
        Number10,
        /**
         * A number field for the task.
         */
        Number11,
        /**
         * A number field for the task.
         */
        Number12,
        /**
         * A number field for the task.
         */
        Number13,
        /**
         * A number field for the task.
         */
        Number14,
        /**
         * A number field for the task.
         */
        Number15,
        /**
         * A number field for the task.
         */
        Number16,
        /**
         * A number field for the task.
         */
        Number17,
        /**
         * A number field for the task.
         */
        Number18,
        /**
         * A number field for the task.
         */
        Number19,
        /**
         * A number field for the task.
         */
        Number2,
        /**
         * A number field for the task.
         */
        Number20,
        /**
         * A number field for the task.
         */
        Number3,
        /**
         * A number field for the task.
         */
        Number4,
        /**
         * A number field for the task.
         */
        Number5,
        /**
         * A number field for the task.
         */
        Number6,
        /**
         * A number field for the task.
         */
        Number7,
        /**
         * A number field for the task.
         */
        Number8,
        /**
         * A number field for the task.
         */
        Number9,
        /**
         * The scheduled (as opposed to actual) duration of the task.
         */
        ScheduledDuration,
        /**
         * The scheduled (as opposed to actual) finish date of the task.
         */
        ScheduledFinish,
        /**
         * The scheduled (as opposed to actual) start date of the task.
         */
        ScheduledStart,
        /**
         * The level of the task in the outline hierarchy.
         */
        OutlineLevel,
        /**
         * The overtime cost for the task.
         */
        OvertimeCost,
        /**
         * The overtime work for the task.
         */
        OvertimeWork,
        /**
         * The percent complete status of the task.
         */
        PercentComplete,
        /**
         * The percentage of work completed for the task.
         */
        PercentWorkComplete,
        /**
         * The IDs of the task's predecessors.
         */
        Predecessors,
        /**
         * The finish date of a task before leveling occurred.
         */
        PreleveledFinish,
        /**
         * The start date of a task before leveling occurred.
         */
        PreleveledStart,
        /**
         * The priority of the task, with values from 0 (low) to 1000 (high). The default priority value is 500.
         */
        Priority,
        /**
         * Indicates whether the task is active.
         */
        Active,
        /**
         * Indicates whether the task is on the critical path.
         */
        Critical,
        /**
         * Indicates whether the task is a milestone.
         */
        Milestone,
        /**
         * Indicates whether any assignments for a task are overallocated.
         */
        Overallocated,
        /**
         * Indicates whether subtask information is rolled up to the summary task bar.
         */
        IsRollup,
        /**
         * Indicates whether the task is a summary task.
         */
        Summary,
        /**
         * The amount of regular work for the task.
         */
        RegularWork,
        /**
         * The remaining cost for the task.
         */
        RemainingCost,
        /**
         * The remaining duration for the task, in minutes.
         */
        RemainingDuration,
        /**
         * The remaining overtime cost for the task.
         */
        RemainingOvertimeCost,
        /**
         * The remaining work for the task, in minutes.
         */
        RemainingWork,
        /**
         * The names of the resources assigned to a task.
         */
        ResourceNames,
        /**
         * The total cost of the task.
         */
        Cost,
        /**
         * The finish date of the task.
         */
        Finish,
        /**
         * The start date of the task.
         */
        Start,
        /**
         * The total person-hours scheduled for the task, in minutes.
         */
        Work,
        /**
         * The duration between the Early Start and Late Start dates for the task.
         */
        StartSlack,
        /**
         * The status of the task: Complete = 0, on schedule = 1, late = 2, future task = 3, status not available = 4.
         */
        Status,
        /**
         * The IDs of the task's successors.
         */
        Successors,
        /**
         * The enterprise resource responsible for accepting or rejecting assignment progress updates for the task.
         */
        StatusManager,
        /**
         * The total slack time for the task, in minutes.
         */
        TotalSlack,
        /**
         * The GUID of the task.
         */
        TaskGUID,
        /**
         * The way the task is calculated: Fixed units = 0, fixed duration = 1, fixed work = 2.
         */
        Type,
        /**
         * The work breakdown structure code of the task.
         */
        WBS,
        /**
         * The work breakdown structure codes of the task predecessors, separated by the list separator.
         */
        WBSPREDECESSORS,
        /**
         * The work breakdown structure codes of the task successors, separated by the list separator.
         */
        WBSSUCCESSORS,
        /**
         * The ID of the task in a SharePoint list, for a project that is synchronized with a SharePoint tasks list.
         */
        WSSID
    }
    /**
     * Specifies the types of views that the getSelectedViewAsync method can recognize.
     *
     * @remarks
     * The getSelectedViewAsync method returns the ProjectViewTypes constant value and name that corresponds to the active view.
     *
     * Hosts: Project
     */
    enum ProjectViewTypes {
        /**
         * The Gantt chart view.
         */
        Gantt,
        /**
         * The Network Diagram view.
         */
        NetworkDiagram,
        /**
         * The Task Diagram view.
         */
        TaskDiagram,
        /**
         * The Task form view.
         */
        TaskForm,
        /**
         * The Task Sheet view.
         */
        TaskSheet,
        /**
         * The Resource Form view.
         */
        ResourceForm,
        /**
         * The Resource Sheet view.
         */
        ResourceSheet,
        /**
         * The Resource Graph view.
         */
        ResourceGraph,
        /**
         * The Team Planner view.
         */
        TeamPlanner,
        /**
         * The Task Details view.
         */
        TaskDetails,
        /**
         * The Task Name Form view.
         */
        TaskNameForm,
        /**
         * The Resource Names view.
         */
        ResourceNames,
        /**
         * The Calendar view.
         */
        Calendar,
        /**
         * The Task Usage view.
         */
        TaskUsage,
        /**
         * The Resource Usage view.
         */
        ResourceUsage,
        /**
         * The Timeline view.
         */
        Timeline
    }
}


////////////////////////////////////////////////////////////////
///////////////////// End Office namespace /////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//////////////// Begin OfficeExtension runtime /////////////////
////////////////////////////////////////////////////////////////

export declare namespace OfficeExtension {
    /** An abstract proxy object that represents an object in an Office document. You create proxy objects from the context (or from other proxy objects), add commands to a queue to act on the object, and then synchronize the proxy object state with the document by calling "context.sync()". */
    export class ClientObject {
        /** The request context associated with the object */
        context: ClientRequestContext;
        /** Returns a boolean value for whether the corresponding object is a null object. You must call "context.sync()" before reading the isNullObject property. */
        isNullObject: boolean;
    }
}

export declare namespace OfficeExtension {
    export interface LoadOption {
        select?: string | string[];
        expand?: string | string[];
        top?: number;
        skip?: number;
    }
    export interface UpdateOptions {
        /**
         * Throw an error if the passed-in property list includes read-only properties (default = true).
         */
        throwOnReadOnly?: boolean
    }

    /** Contains debug information about the request context. */
    export interface RequestContextDebugInfo {
        /**
         * The statements to be executed in the host.
         *
         * These statements may not match the code exactly as written, but will be a close approximation.
         */
        pendingStatements: string[];
    }

    /** An abstract RequestContext object that facilitates requests to the host Office application. The "Excel.run" and "Word.run" methods provide a request context. */
    export class ClientRequestContext {
        constructor(url?: string);

        /** Collection of objects that are tracked for automatic adjustments based on surrounding changes in the document. */
        trackedObjects: TrackedObjects;

        /** Request headers */
        requestHeaders: { [name: string]: string };

        /** Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties. */
        load(object: ClientObject, option?: string | string[] | LoadOption): void;

        /**
        * Queues up a command to recursively load the specified properties of the object and its navigation properties.
        * You must call "context.sync()" before reading the properties.
        *
        * @param object - The object to be loaded.
        * @param options - The key-value pairing of load options for the types, such as { "Workbook": "worksheets,tables",  "Worksheet": "tables",  "Tables": "name" }
        * @param maxDepth - The maximum recursive depth.
        */
        loadRecursive(object: ClientObject, options: { [typeName: string]: string | string[] | LoadOption }, maxDepth?: number): void;

        /** Adds a trace message to the queue. If the promise returned by "context.sync()" is rejected due to an error, this adds a ".traceMessages" array to the OfficeExtension.Error object, containing all trace messages that were executed. These messages can help you monitor the program execution sequence and detect the cause of the error. */
        trace(message: string): void;

        /** Synchronizes the state between JavaScript proxy objects and the Office document, by executing instructions queued on the request context and retrieving properties of loaded Office objects for use in your code.�This method returns a promise, which is resolved when the synchronization is complete. */
        sync<T>(passThroughValue?: T): Promise<T>;

        /** Debug information */
        readonly debugInfo: RequestContextDebugInfo;
    }

    export interface EmbeddedOptions {
        sessionKey?: string,
        container?: HTMLElement,
        id?: string;
        timeoutInMilliseconds?: number;
        height?: string;
        width?: string;
    }

    export class EmbeddedSession {
        constructor(url: string, options?: EmbeddedOptions);
        public init(): Promise<any>;
    }
}

export declare namespace OfficeExtension {
    /** Contains the result for methods that return primitive types. The object's value property is retrieved from the document after "context.sync()" is invoked. */
    export class ClientResult<T> {
        /** The value of the result that is retrieved from the document after "context.sync()" is invoked. */
        value: T;
    }
}

export declare namespace OfficeExtension {
    /** Configuration */
    var config: {
        /**
         * Determines whether to log additional error information upon failure.
         *
         * When this property is set to true, the error object will include a "debugInfo.fullStatements" property that lists all statements in the batch request, including all statements that precede and follow the point of failure.
         *
         * Setting this property to true will negatively impact performance and will log all statements in the batch request, including any statements that may contain potentially-sensitive data.
         * It is recommended that you only set this property to true during debugging and that you never log the value of error.debugInfo.fullStatements to an external database or analytics service.
         */
        extendedErrorLogging: boolean;
    };

    export interface DebugInfo {
        /** Error code string, such as "InvalidArgument". */
        code: string;
        /** The error message passed through from the host Office application. */
        message: string;
        /** Inner error, if applicable. */
        innerError?: DebugInfo | string;

        /** The object type and property or method name (or similar information), if available. */
        errorLocation?: string;

        /**
         * The statement that caused the error, if available.
         *
         * This statement will never contain any potentially-sensitive data and may not match the code exactly as written, but will be a close approximation.
         */
        statements?: string;

        /**
         * The statements that closely precede and follow the statement that caused the error, if available.
         *
         * These statements will never contain any potentially-sensitive data and may not match the code exactly as written, but will be a close approximation.
         */
        surroundingStatements?: string[];

        /**
         * All statements in the batch request (including any potentially-sensitive information that was specified in the request), if available.
         *
         * These statements may not match the code exactly as written, but will be a close approximation.
         */
        fullStatements?: string[];
    }

    /** The error object returned by "context.sync()", if a promise is rejected due to an error while processing the request. */
    export class Error {
        /** Error name: "OfficeExtension.Error".*/
        name: string;
        /** The error message passed through from the host Office application. */
        message: string;
        /** Stack trace, if applicable. */
        stack: string;
        /** Error code string, such as "InvalidArgument". */
        code: string;
        /** Trace messages (if any) that were added via a "context.trace()" invocation before calling "context.sync()". If there was an error, this contains all trace messages that were executed before the error occurred. These messages can help you monitor the program execution sequence and detect the case of the error. */
        traceMessages: Array<string>;
        /** Debug info (useful for detailed logging of the error, i.e., via JSON.stringify(...)). */
        debugInfo: DebugInfo;
        /** Inner error, if applicable. */
        innerError: Error;
    }
}

export declare namespace OfficeExtension {
    export class ErrorCodes {
        public static accessDenied: string;
        public static generalException: string;
        public static activityLimitReached: string;
        public static invalidObjectPath: string;
        public static propertyNotLoaded: string;
        public static valueNotLoaded: string;
        public static invalidRequestContext: string;
        public static invalidArgument: string;
        public static runMustReturnPromise: string;
        public static cannotRegisterEvent: string;
        public static apiNotFound: string;
        public static connectionFailure: string;
    }
}

export declare namespace OfficeExtension {
    /** A Promise object that represents a deferred interaction with the host Office application. The publicly-consumable OfficeExtension.Promise is available starting in ExcelApi 1.2 and WordApi 1.2. Promises can be chained via ".then", and errors can be caught via ".catch". Remember to always use a ".catch" on the outer promise, and to return intermediary promises so as not to break the promise chain. When a browser-provided native Promise implementation is available, OfficeExtension.Promise will switch to use the native Promise instead. */
    const Promise: Office.IPromiseConstructor;
    type IPromise<T> = Promise<T>;
}

export declare namespace OfficeExtension {
    /** Collection of tracked objects, contained within a request context. See "context.trackedObjects" for more information. */
    export class TrackedObjects {
        /** Track a new object for automatic adjustment based on surrounding changes in the document. Only some object types require this. If you are using an object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created. */
        add(object: ClientObject): void;
        /** Track a new object for automatic adjustment based on surrounding changes in the document. Only some object types require this. If you are using an object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created. */
        add(objects: ClientObject[]): void;
        /** Release the memory associated with an object that was previously added to this collection. Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect. */
        remove(object: ClientObject): void;
        /** Release the memory associated with an object that was previously added to this collection. Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect. */
        remove(objects: ClientObject[]): void;
    }
}

export declare namespace OfficeExtension {
    export class EventHandlers<T> {
        constructor(context: ClientRequestContext, parentObject: ClientObject, name: string, eventInfo: EventInfo<T>);
        add(handler: (args: T) => Promise<any>): EventHandlerResult<T>;
        remove(handler: (args: T) => Promise<any>): void;
    }

    export class EventHandlerResult<T> {
        constructor(context: ClientRequestContext, handlers: EventHandlers<T>, handler: (args: T) => Promise<any>);
        /** The request context associated with the object */
        context: ClientRequestContext;
        remove(): void;
    }

    export interface EventInfo<T> {
        registerFunc: (callback: (args: any) => void) => Promise<any>;
        unregisterFunc: (callback: (args: any) => void) => Promise<any>;
        eventArgsTransformFunc: (args: any) => Promise<T>;
    }
}
export declare namespace OfficeExtension {
    /**
    * Request URL and headers
    */
    export interface RequestUrlAndHeaderInfo {
        /** Request URL */
        url: string;
        /** Request headers */
        headers?: {
            [name: string]: string;
        };
    }
}


////////////////////////////////////////////////////////////////
///////////////// End OfficeExtension runtime //////////////////
////////////////////////////////////////////////////////////////
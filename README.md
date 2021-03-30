# Steps
1.  `pnpm i`
1.  `pnpm run build`
    ```shell
    PS C:\projects\ng11test1> pnpm run build

    > ng11test1@0.0.0 build C:\projects\ng11test1
    > ng build


    Compiling @angular/core : es2015 as esm2015

    Compiling @angular/common : es2015 as esm2015

    Compiling @angular/platform-browser : es2015 as esm2015

    Compiling @angular/platform-browser-dynamic : es2015 as esm2015

    Compiling @angular/animations : es2015 as esm2015

    Compiling @progress/kendo-angular-l10n : es2015 as esm2015

    Compiling @progress/kendo-angular-common : es2015 as esm2015

    Compiling @progress/kendo-angular-common : es2015 as esm2015

    An error occurred during the build:
    Error: Tried to overwrite C:/projects/ng11test1/node_modules/@progress/kendo-angular-common/dist/es2015/draggable/draggable.directive.d.ts.__ivy_ngcc_bak with an ngcc back up file, which is disallowed.
        at NewEntryPointFileWriter.InPlaceFileWriter.writeFileAndBackup (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\writing\in_place_file_writer.js:58:27)
        at NewEntryPointFileWriter.writeFile (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\writing\new_entry_point_file_writer.js:128:53)
        at C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\writing\new_entry_point_file_writer.js:47:69
        at Array.forEach (<anonymous>)
        at NewEntryPointFileWriter.writeBundle (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\writing\new_entry_point_file_writer.js:47:30)
        at writeBundle (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\execution\create_compile_function.js:58:36)
        at C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\execution\create_compile_function.js:65:25
        at SingleProcessExecutorSync.SingleProcessorExecutorBase.doExecute (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:36:17)
        at C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:57:59
        at SyncLocker.lock (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\locking\sync_locker.js:34:24)
        at SingleProcessExecutorSync.execute (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\execution\single_process_executor.js:57:27)
        at Object.mainNgcc (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\src\main.js:74:25)
        at Object.process (C:\projects\ng11test1\node_modules\.pnpm\@angular\compiler-cli@11.2.7_28a22fea15390ff2a0277020df5892b3\node_modules\@angular\compiler-cli\ngcc\index.js:29:23)
        at NgccProcessor.processModule (C:\projects\ng11test1\node_modules\.pnpm\@ngtools\webpack@11.2.6_73c905c91b7a7a00894c1585662052e4\node_modules\@ngtools\webpack\src\ngcc_processor.js:163:16)
        at C:\projects\ng11test1\node_modules\.pnpm\@ngtools\webpack@11.2.6_73c905c91b7a7a00894c1585662052e4\node_modules\@ngtools\webpack\src\ivy\host.js:109:18
        at C:\projects\ng11test1\node_modules\.pnpm\@ngtools\webpack@11.2.6_73c905c91b7a7a00894c1585662052e4\node_modules\@ngtools\webpack\src\ivy\host.js:39:24
    An unhandled exception occurred: Tried to overwrite C:/projects/ng11test1/node_modules/@progress/kendo-angular-common/dist/es2015/draggable/draggable.directive.d.ts.__ivy_ngcc_bak with an ngcc back up file, which is disallowed.
    See "C:\Users\STOLPE~1\AppData\Local\Temp\ng-amzzhN\angular-errors.log" for further details.
     ERROR  Command failed.
    ```
1.  `pnpm run build` again
    ```shell
    PS C:\projects\ng11test1> pnpm run build

    > ng11test1@0.0.0 build C:\projects\ng11test1
    > ng build


    Compiling @progress/kendo-angular-popup : es2015 as esm2015

    Compiling @progress/kendo-angular-buttons : es2015 as esm2015

    Compiling @progress/kendo-angular-dialog : es2015 as esm2015

    Compiling @angular/router : es2015 as esm2015
    √ Browser application bundle generation complete.
    √ Copying assets complete.
    √ Index html generation complete.

    Initial Chunk Files | Names         |      Size
    vendor.js           | vendor        |   3.56 MB
    polyfills.js        | polyfills     | 128.90 kB
    main.js             | main          |  12.36 kB
    runtime.js          | runtime       |   6.15 kB
    styles.css          | styles        | 118 bytes

                        | Initial Total |   3.71 MB

    Build at: 2021-03-30T08:53:01.848Z - Hash: 54929d0957b38c59b910 - Time: 16907ms
    ```

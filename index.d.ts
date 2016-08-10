declare module SLK581 { // ghost
    enum SexIndicator {
        Male = 1,
        Female = 2,
        IntersexOrIndeterminate = 3,
        Unknown = 9,
    }

    type DateAccuracyIndicator = 'A' | 'U' | 'E';

    interface DateAccuracy {
        year: DateAccuracyIndicator;
        month: DateAccuracyIndicator;
        day: DateAccuracyIndicator;
    }

    interface Date {
        year?: number;
        month?: number;
        day?: number;
        accuracy?: DateAccuracy;
    }

    interface Inputs {
        familyName: string;
        givenName: string;
        born?: Date;
        sex?: SexIndicator;
    }
}

declare module 'slk-581' {
    function makeIndicator(inputs: SLK581.Inputs): string;
}

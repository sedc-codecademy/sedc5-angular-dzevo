export class Contact {
    id: string;
    fullName: string;
    phoneNumber: string;

    public static empty(): Contact {
        return {
            id: "",
            fullName: "",
            phoneNumber: ""
        };
    }
}
export class Contact {
    id: string;
    name: string;
    phoneNumber: string;

    public static empty(): Contact {
        return {
            id: "",
            name: "",
            phoneNumber: ""
        };
    }
}
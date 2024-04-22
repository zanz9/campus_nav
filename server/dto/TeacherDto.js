
export default class TeacherDto {
    id
    email
    first_name
    last_name

    constructor(user) {
        this.id = user.id
        this.email = user.email
        this.first_name = user.first_name
        this.last_name = user.last_name
    }
}


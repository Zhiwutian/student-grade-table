

class App {
    constructor() {

        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);

    }

    handleGetGradesError (error) {
        console.error("error ", error);
    }

    handleGetGradesSuccess (grades) {
        console.log("grades ", grades)
    }

    getGrades ()


}

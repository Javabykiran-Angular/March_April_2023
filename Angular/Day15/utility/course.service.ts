
export class CourseService{
    private course:string[]=['Core java','Advanced Java','Spring Boot','HTML,CSS,JS','Angular 12','AWS','Jenkings','Docker','Kubernates'];

    getCourse(){
        return this.course;
    }

}
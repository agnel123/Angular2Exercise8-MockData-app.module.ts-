System.register(['./mock-students'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_students_1, mock_students_2;
    var StudentService;
    return {
        setters:[
            function (mock_students_1_1) {
                mock_students_1 = mock_students_1_1;
                mock_students_2 = mock_students_1_1;
            }],
        execute: function() {
            //@Injectable()
            StudentService = (function () {
                function StudentService() {
                }
                StudentService.prototype.getStudents = function () {
                    return Promise.resolve(mock_students_1.STUDENTS);
                };
                StudentService.prototype.getTitle = function () {
                    return Promise.resolve(mock_students_2.serviceTitle);
                };
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=Student.service.js.map
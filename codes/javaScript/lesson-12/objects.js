let emma = {
    f_name: 'Emmanuel',
    l_name: 'Ikechukwu',
    age: 23,
    level: 100,
    course: 'Computer Science',
    printName: function () {
        console.log(`My name is ${f_name} ${l_name}`);
    },

    updateNmae: function (fname, lname) {
        this.f_name = fname;
        this.l_name = lname;
    }
}

emma.printName();
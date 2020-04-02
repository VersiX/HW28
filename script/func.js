let output = document.getElementById("Out");
function print(text) {
    output.innerHTML += text;
    output.innerHTML += "<br>";
}

function clearOut() {
    output.innerHTML = "";
}

// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// 
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// 
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getLength() {
        return this.diameter * Math.PI;
    }
}


function CircleDem() {
    clearOut();
    let C = new Circle(5);
    print(`Circle of radius ${C.radius}`);
    C.radius = 6;
    print(`Now the radius is ${C.radius}`);
    print(`The diameter is ${C.diameter}`);
    print("The area of circle is: " + C.getArea());
    print("The perimetr of circle is: " + C.getLength());


}


// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// 
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом;
//  текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// 
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// 
// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(color) {
        this._color = color;
        this.ink = 100;
    }
    write(text) {
        let result = `<span style="color:${this._color}">`;
        for (let i = 0; (this.ink > 0) && (i < text.length); i++) {
            result += text[i];
            this.ink -= 0.5;
        }

        return result + "</span>";
    }
}

class RefillingMarker extends Marker {
    constructor(color) {
        super(color);
    }

    refill() {
        this.ink = 100;
    }
}


function MarkerDem() {
    clearOut();

    let Red = new Marker("#ff0000");
    let Blue = new RefillingMarker("#0000ff");

    print(Red.write("This is Red marker. It can't be refilled."));
    print(Blue.write("This is Blue marker. It can be refilled."));

    print("---------------------");

    print(Red.write("Let's make this marker empty with this very, very looooooooong text, that is toooooo long for it to be printed whole so that this particular text can't be printed whole. Are you actually reading this? Why? Its's pointless. This text has no meaning. Why are you doing this?"));
    print("---------------------");

    print(Blue.write("Let's make this marker empty with this very, very looooooooong text, that is toooooo long for it to be printed whole so that this particular text can't be printed whole. Are you actually reading this? Why? Its's pointless. This text has no meaning. Why are you doing this?"));
    print("---------------------");

    Blue.refill();

    print(Blue.write("We refilled Blue marker and now it can write again!"));
}




// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// 
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// 
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
    constructor(name, surname, position) {
        this.name = name;
        this.surname = surname;
        this.position = position;
    }
}

class EmpTable {
    constructor(EmployeeArray) {
        this.array = EmployeeArray;
    }

    getHtml() {
        let Table = "<table style='color:black'><tr><th>Name</th><th>Surname</th><th>Position</th></tr>";

        for (let i = 0; i < this.array.length; i++) {
            Table += `<tr><td>${this.array[i].name}</td><td>${this.array[i].surname}</td><td>${this.array[i].position}</td></tr>`;
        }

        return Table + "</table>";
    }
}



function BankDem() {
    clearOut();

    let EmpList = [];

    for (let i = 0; i < 20; i++) {
        EmpList[i] = new Employee(`clone${i}`, `Sur${i}`, `pos${i}`);
    }

    let T = new EmpTable(EmpList);
    print(T.getHtml());


}
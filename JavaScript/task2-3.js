let var1 = 3 + (2 - true + false) / 3 && true;
console.log(var1);
//Yuxaridaki kodun neticesi true olacaq cunki && operatorunda tereflerden ikisi de true dursa (burda sol teref 0 olmadigina gore - musbet eded, sag teref true) cavab true, eger tereflerden biri true biri false ve ya her ikisi false dursa cavab false olur.

//Emeliyyat siralamasinda ilk olaraq moterizenin ici hesablanacaq, daha sonra '/' emeliyyati icra olunacaq, sonra soldaki + emeliyyati icra olunub en sonda '&&' operatoru ile iki teref qarsilasdirilacaq.

let var2 = 3 == '3' === '3';
console.log(var2);
//Bu kodun ilk neticesi true, ikinci neticesi false olacaq. Cunki ilk olaraq 3 == '3' hissesinde '3' 3 e cevirile bildiyi ucun ve her iki terefin qiymetinin 3 oldugu ucun netice true olacaq. Sag terefde ise === operatoru goruruk. Burada ilk iki == tereflerin beraber olub olmadigini yoxlayir (bu halda 3 == '3' olacaq ve bu dogrudur), 3 cu = isaresi ise tereflerin data typelerinin eyni olub olmadigini yoxlayir, bu halda ise sol teref number, sag teref ise string olacag ve buna gore de yekun netice false olacaq.
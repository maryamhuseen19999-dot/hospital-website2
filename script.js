const departments = {
heart: {
name: "القلب",
image: "https://plus.unsplash.com/premium_photo-1718349374495-b1d09644f973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
description: "يهتم قسم القلب بفحص القلب ومتابعة صحة الأوعية الدموية وتشخيص أمراض القلب.",
conditions: ["ارتفاع ضغط الدم", "اضطراب ضربات القلب", "أمراض الشرايين", "ضعف عضلة القلب"],
medicines: ["أدوية ضغط الدم: تُستخدم في حالات معينة لتقليل ضغط الدم، ولا تؤخذ إلا بوصفة الطبيب."]
},

eyes: {
name: "العيون",
image: "https://media.istockphoto.com/id/905714114/photo/close-up-beautiful-women-eye-macro-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=CaJdDEZauzmOLRTfDqN3c3JyTiS9pjd7lWrATHcS20M=",
description: "يهتم قسم العيون بفحص النظر وتشخيص أمراض العين ومتابعة صحة البصر.",
conditions: ["ضعف النظر", "التهاب العين", "المياه البيضاء", "جفاف العين"],
medicines: ["قطرات العين: قد تُستخدم لعلاج بعض حالات الجفاف أو الالتهاب حسب تشخيص الطبيب."]
},
bones: {
name: "العظام",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytHpn4XkYaNxluwjrtfCc4DzfAVMLCZ4esHQFyzYN-A&s=10?w=900",
description: "يهتم قسم العظام بصحة العظام والمفاصل والعضلات وعلاج إصاباتها.",
conditions: ["آلام المفاصل", "الكسور", "خشونة المفاصل", "آلام الظهر"],
medicines: ["مسكنات الألم: قد تستخدم لبعض آلام العظام، ويجب استشارة الطبيب قبل تناولها."]
},
children: {
name: "الأطفال",
image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900",
description: "يقدم قسم الأطفال الرعاية الصحية للأطفال ومتابعة نموهم وصحتهم.",
conditions: ["نزلات البرد", "الحساسية", "الأنيميا", "اضطرابات الجهاز الهضمي"],
medicines: ["أدوية خفض الحرارة: تُستخدم للأطفال بجرعات يحددها الطبيب حسب العمر والوزن."]
},

teeth: {
name: "الأسنان",
image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900",
description: "يهتم قسم الأسنان بصحة الفم والأسنان وعلاج المشكلات المتعلقة بها.",
conditions: ["تسوس الأسنان", "التهاب اللثة", "آلام الأسنان", "حساسية الأسنان"],
medicines: ["مسكنات الألم: قد تساعد في تخفيف ألم الأسنان، ويحدد الطبيب النوع المناسب."]
},
internal: {
name: "الباطنة",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP0QpL0rJQnVd3x95mQaLsq9wVifcZQBzvUSj-RKS0w&s=10?w=900",
description: "يهتم قسم الباطنة بتشخيص الأمراض الداخلية ومتابعة صحة الجسم.",
conditions: ["مرض السكري", "ارتفاع ضغط الدم", "الأنيميا", "اضطرابات الغدة الدرقية"],
medicines: ["أدوية الأمراض المزمنة: يحدد الطبيب نوع الدواء وجرعته حسب حالة المريض."]
},
skin: {
name: "الجلدية",
image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900",
description: "يهتم قسم الجلدية بتشخيص وعلاج مشكلات الجلد والشعر والأظافر.",
conditions: ["حب الشباب", "الإكزيما", "الحساسية الجلدية", "الفطريات الجلدية"],
medicines: ["الكريمات الجلدية: تختلف حسب الحالة، وبعضها لا يستخدم إلا بوصفة طبية."]
},chest: {
name: "الصدر",
image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900",
description: "يهتم قسم الصدر بصحة الرئتين والجهاز التنفسي وتشخيص أمراضهما.",
conditions: ["الربو", "الحساسية الصدرية", "التهاب الشعب الهوائية", "الالتهاب الرئوي"],
medicines: ["بخاخات الصدر: قد تستخدم لبعض أمراض التنفس، ويحدد الطبيب النوع المناسب."]
},

kidney: {
name: "الكلى",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CnnVVhcYnzHZl5k_O889oDBXXssphytD35HVkQM4XA&s=10?w=900",
description: "يهتم القسم بصحة الكلى ومتابعة وظائفها وتشخيص أمراضها.",
conditions: ["حصوات الكلى", "التهابات الكلى", "ضعف وظائف الكلى", "أمراض الكلى المزمنة"],
medicines: ["أدوية الكلى: تختلف حسب سبب المشكلة ووظائف الكلى، ولا تستخدم دون إشراف طبي."]
},

urinary: {
name: "المسالك البولية",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdorle9QQ-uS6PA3YxUH6srbob5bI95gdq8SlRFSArfQ&s=10?w=900",
description: "يهتم القسم بأمراض الجهاز البولي ومتابعة مشكلات المثانة والمسالك البولية.",
conditions: ["التهابات المسالك البولية", "حصوات المثانة", "صعوبة التبول", "بعض أمراض المثانة"],
medicines: ["أدوية المسالك البولية: يحدد الطبيب العلاج بعد الفحص ومعرفة سبب المشكلة."]
},

digestive: {
name: "الجهاز الهضمي",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGByy8nf-lNbtwwsUtt2By8ZZcOnFRbDTKSNiveJjAng&s=10?w=900",
description: "يهتم قسم الجهاز الهضمي بأمراض المعدة والأمعاء والكبد والجهاز الهضمي.",
conditions: ["التهاب المعدة", "القولون العصبي", "ارتجاع المريء", "أمراض الكبد"],
medicines: ["أدوية الحموضة: قد تستخدم لبعض حالات الحموضة، ويحدد الطبيب مدى الحاجة إليها."]
},

oncology: {
name: "الأورام",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xaVXXbuJ16t5qzeqdKoSPznTmY8ttSspCevUAo1yMw&s=10?w=900",
description: "يقدم قسم الأورام الرعاية والمتابعة الطبية للمرضى المصابين بالأورام.",
conditions: ["أورام الثدي", "أورام القولون", "أورام الرئة", "أورام الدم"],
medicines: ["أدوية علاج الأورام: يحددها الطبيب المتخصص وفق نوع الورم وحالة المريض."]
},

emergency: {
name: "الطوارئ",
image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=900",
description: "يقدم قسم الطوارئ الرعاية الأولية للحالات التي تحتاج إلى تدخل طبي عاجل.",
conditions: ["الإصابات المفاجئة", "الحوادث", "الحروق", "الحالات الطبية العاجلة"],
medicines: ["الأدوية في الطوارئ: يحددها الفريق الطبي حسب الحالة، ولا تؤخذ دون تقييم طبي."]
},

surgery: {
name: "الجراحة",
image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=900",
description: "يهتم قسم الجراحة بتقييم الحالات التي قد تحتاج إلى تدخل جراحي ومتابعتها.",
conditions: ["الزائدة الدودية", "الفتق", "حصوات المرارة", "بعض الإصابات"],
medicines: ["أدوية ما بعد الجراحة: يحددها الطبيب حسب نوع العملية وحالة المريض."]
},

physiotherapy: {
name: "العلاج الطبيعي",
image: "https://www.ecmc.edu/wp-content/uploads/2025/01/1110x750-featured-RehabilitationServices.jpg",
description: "يساعد قسم العلاج الطبيعي على تحسين الحركة والتأهيل بعد الإصابات والعمليات.",
conditions: ["آلام الظهر", "تيبس المفاصل", "ضعف الحركة", "التأهيل بعد الإصابات"],
medicines: ["العلاج الطبيعي يعتمد على التمارين والتأهيل، وقد يوصي الطبيب بأدوية عند الحاجة."]
},

lab: {
name: "التحاليل",
image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
description: "يقدم قسم التحاليل الفحوصات الطبية التي تساعد الأطباء في تقييم الحالة الصحية.",
conditions: ["تحاليل الدم", "تحاليل السكر", "تحاليل وظائف الكلى", "تحاليل وظائف الكبد"],
medicines: ["قسم التحاليل لا يصف الأدوية، لكنه يساعد في الفحوصات التي يستند إليها الطبيب."]
},

radiology: {
name: "الأشعة",
image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=900",
description: "يقدم قسم الأشعة خدمات التصوير الطبي للمساعدة في تشخيص الحالات المختلفة.",
conditions: ["الأشعة السينية", "الموجات فوق الصوتية", "الأشعة المقطعية", "الرنين المغناطيسي"],
medicines: ["قسم الأشعة لا يصف الأدوية، وقد يحدد الطبيب احتياطات خاصة قبل بعض الفحوصات."]
},
women: {
name: "النساء والتوليد",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRb9iSFPIeeROGJsLlpt9U-HFIszZThjEN2jIuub2rA&s=10?w=900",
description: "يهتم القسم بصحة المرأة ومتابعة الحمل وتقديم الرعاية الطبية اللازمة.",
conditions: ["متابعة الحمل", "اضطرابات الدورة الشهرية", "تكيس المبايض", "بعض الالتهابات"],
medicines: ["الأدوية الخاصة بصحة المرأة: يجب تحديدها بواسطة الطبيب، خاصة أثناء الحمل."]
},
skin: {
name: "الجلدية",
image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900",
description: "يهتم قسم الجلدية بتشخيص وعلاج مشكلات الجلد والشعر والأظافر.",
conditions: ["حب الشباب", "الإكزيما", "الحساسية الجلدية", "الفطريات الجلدية"],
medicines: ["الكريمات الجلدية: تختلف حسب الحالة، وبعضها لا يستخدم إلا بوصفة طبية."]
},
brain: {
name: "المخ والأعصاب",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900",
description: "يهتم القسم بتشخيص ومتابعة أمراض المخ والأعصاب والجهاز العصبي.",
conditions: ["الصداع النصفي", "الصرع", "التهاب الأعصاب", "اضطرابات الأعصاب"],
medicines: ["أدوية الأعصاب: تختلف حسب المرض، ولا يجوز استخدامها دون متابعة الطبيب."]
},


nutrition: {
name: "التغذية",
image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
description: "يهتم قسم التغذية بالتوعية الغذائية ووضع إرشادات مناسبة للحالة الصحية.",
conditions: ["سوء التغذية", "نقص بعض الفيتامينات", "فقر الدم الغذائي", "التغذية مع الأمراض المزمنة"],
medicines: ["المكملات الغذائية: لا تستخدم إلا عند الحاجة وبعد تقييم الطبيب أو أخصائي التغذية."]
}
};


// عرض بيانات القسم
const departmentType = document.body.dataset.department;

if (departmentType && departments[departmentType]) {

const department = departments[departmentType];

document.title = "قسم " + department.name + " | مستشفى الأمل";

document.getElementById("departmentTitle").textContent =
"قسم " + department.name;

document.getElementById("departmentDescription").textContent =
department.description;

const departmentImage = document.getElementById("departmentImage");

departmentImage.src = department.image;

departmentImage.alt = "صورة قسم " + department.name;

departmentImage.onerror = function () {
this.style.display = "none";
};


// عرض الأمراض
const conditionsContainer =
document.getElementById("conditionsContainer");

department.conditions.forEach(function (condition) {

const card = document.createElement("div");

card.className = "department-card";

card.textContent = condition;

conditionsContainer.appendChild(card);

});


// عرض معلومات الأدوية
const medicinesContainer =
document.getElementById("medicinesContainer");

department.medicines.forEach(function (medicine) {

const card = document.createElement("div");

card.className = "department-card";

card.textContent = medicine;

medicinesContainer.appendChild(card);

});


// زر الحجز
const bookingButton =
document.getElementById("bookingButton");

const bookingFormContainer =
document.getElementById("bookingFormContainer");

bookingButton.addEventListener("click", function () {

bookingFormContainer.innerHTML = `
<h2>حجز موعد </h2>

<form id="bookingForm">

<label>اسم المريض</label>
<input type="text" id="patientName" required>

<label>رقم الهاتف</label>
<input type="tel" id="patientPhone" required>

<label>تاريخ </label>
<input type="date" id="bookingDate" required>
<label>وقت </label>
<input type="time" id="bookingTime" required>

<button type="submit" class="btn">
تأكيد الحجز 
</button>

</form>

<div id="bookingResult"></div>
`;

const bookingDate = document.getElementById("bookingDate");

bookingDate.min = new Date().toISOString().split("T")[0];

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

event.preventDefault();

const patientName =
document.getElementById("patientName").value.trim();

const patientPhone =
document.getElementById("patientPhone").value.trim();

const date =
document.getElementById("bookingDate").value;

const time =
document.getElementById("bookingTime").value;

if (!patientName || !patientPhone || !date || !time) {
alert("من فضلك املئي جميع البيانات");
return;
}

const bookingNumber = Math.floor(Math.random() * 9000) + 1000;

document.getElementById("bookingResult").innerHTML = `
<div class="department-card">
<h3>تم تسجيل الحجز  بنجاح</h3>
<p>اسم المريض: ${patientName.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
<p>القسم: ${department.name}</p>
<p>رقم الحجز: ${bookingNumber}</p>
<p>التاريخ: ${date}</p>
<p>الوقت: ${time}</p>
</div>
`;

});

bookingFormContainer.scrollIntoView({
behavior: "smooth"
});

});

}


// البحث في الصفحة الرئيسية
const searchInput = document.getElementById("searchInput");

if (searchInput) {

const cards = document.querySelectorAll(".department-card");

searchInput.addEventListener("input", function () {

const value = searchInput.value.trim();

cards.forEach(function (card) {

const name = card.querySelector("h3");

if (name && name.textContent.includes(value)) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});

}

// زر الرجوع للأعلى
const topButton = document.getElementById("topButton");

if (topButton) {

topButton.addEventListener("click", function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

}

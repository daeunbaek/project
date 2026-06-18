function showRecords(){
    const recordList = document.getElementById("recordList");

    if(recordList){
        let records = JSON.parse(localStorage.getItem("records")) || [];

        recordList.innerHTML = "";

        if(records.length === 0){
            recordList.innerHTML = "<p>아직 저장된 기록이 없습니다.</p>";
        }else{
            [...records].reverse().forEach(record => {
                recordList.innerHTML += `
                    <div class="record-item">
                        <div class="record-date">${record.date}</div>
                        <div class="record-emotion">${record.emotion}</div>
                        <div>${record.diary}</div>
                    </div>
                `;
            });
        }
    }
}

const recordForm = document.getElementById("recordForm");

if(recordForm){
    recordForm.addEventListener("submit", function(event){
        event.preventDefault();

        const emotion = document.getElementById("emotion").value;
        const diary = document.getElementById("diary").value;
        const today = new Date().toLocaleDateString();

        const newRecord = {
            date: today,
            emotion: emotion,
            diary: diary
        };

        let records = JSON.parse(localStorage.getItem("records")) || [];

        records.push(newRecord);

        localStorage.setItem("records", JSON.stringify(records));

        document.getElementById("saveMessage").innerText = "기록이 저장되었습니다.";

        recordForm.reset();

        showRecords();
    });
}

showRecords();

const recordList = document.getElementById("recordList");

if(recordList){

    let records =
    JSON.parse(localStorage.getItem("records")) || [];

    recordList.innerHTML = "";

    if(records.length === 0){

        recordList.innerHTML =
        "<p>아직 저장된 기록이 없습니다.</p>";

    }else{

        [...records].reverse().forEach(record => {

            recordList.innerHTML += `

            <div class="record-item">

                <div class="record-date">
                    ${record.date}
                </div>

                <div class="record-emotion">
                    ${record.emotion}
                </div>

                <div>
                    ${record.diary}
                </div>

            </div>

            `;

        });

    }

}

const contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if(name === "" || email === "" || message === ""){
            document.getElementById("contactMessage").innerText =
            "모든 항목을 입력해주세요.";
        }else{
            document.getElementById("contactMessage").innerText =
            "문의가 정상적으로 접수되었습니다.";

            contactForm.reset();
        }
    });
}

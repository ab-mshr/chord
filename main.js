Scale = ["C", "D♭/C#", "D", "E♭/D#", "E", "F", "G♭/F#", "G", "A♭/G#", "A", "B♭/A#", "H"]

function butotnClick() {
    input = [];
    input[input.length] = Number(Select1.value);
    input[input.length] = Number(Select2.value);
    input[input.length] = Number(Select3.value);

    input.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    console.log(input)
    console.log(input[0], input[1], input[2]);

    if (input[0] + 4 == input[1] && input[1] + 3 == input[2]) {//メジャー基本形
        console.log("長調（メジャーコード）")
        console.log("基本形")
        msg_one.innerText = '根音は' + Scale[input[0] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[1] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[2] - 1] + 'です';
        msg_witch.innerText = 'この和音は長調です';
    } else if (input[0] + 3 == input[1] && input[1] + 5 == input[2]) {//メジャー第一転回形
        console.log("長調（メジャーコード）")
        console.log("第1転回形")
        msg_one.innerText = '根音は' + Scale[input[2] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[0] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[1] - 1] + 'です';
        msg_witch.innerText = 'この和音は長調です';
    } else if (input[0] + 5 == input[1] && input[1] + 4 == input[2]) {//メジャー第二転回形
        console.log("長調（メジャーコード）")
        console.log("第2転回形")
        msg_one.innerText = '根音は' + Scale[input[1] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[2] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[0] - 1] + 'です';
        msg_witch.innerText = 'この和音は長調です';
    }

    if (input[0] + 3 == input[1] && input[1] + 4 == input[2]) {//メジャー基本形
        console.log("短調（マイナーコード）")
        console.log("基本形")
        msg_one.innerText = '根音は' + Scale[input[0] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[1] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[2] - 1] + 'です';
        msg_witch.innerText = 'この和音は短調です';
    } else if (input[0] + 5 == input[1] && input[1] + 3 == input[2]) {//メジャー第一転回形
        console.log("短調（マイナーコード）")
        console.log("第1転回形")
        msg_one.innerText = '根音は' + Scale[input[1] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[2] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[0] - 1] + 'です';
        msg_witch.innerText = 'この和音は短調です';
    } else if (input[0] + 4 == input[1] && input[1] + 5 == input[2]) {//メジャー第二転回形
        console.log("短調（マイナーコード）")
        console.log("第2転回形")
        msg_one.innerText = '根音は' + Scale[input[2] - 1] + 'です';
        msg_three.innerText = '3音は' + Scale[input[0] - 1] + 'です';
        msg_five.innerText = '5音は' + Scale[input[1] - 1] + 'です';
        msg_witch.innerText = 'この和音は短調です';
    } else{
        msg_one.innerText = '選択肢が間違っている可能性があります';
        msg_three.innerText = ' ';
        msg_five.innerText = ' ';
        msg_witch.innerText = ' ';
    }
}
let Select1 = document.getElementById('Select1');
Select1.options[0].selected = true;

let Select2 = document.getElementById('Select2');
Select2.options[0].selected = true;

let Select3 = document.getElementById('Select3');
Select3.options[0].selected = true;

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);
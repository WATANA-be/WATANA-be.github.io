function omikuji() {
    let msg1;
    let msg2;
    let random1;
    let random2;

    random1 = Math.floor(Math.random() * 5);
    console.log(random1);

    const result = ['大吉', '中吉', '吉', "超大吉","ウルトラ末吉",'末吉'];

    msg1 = result[random1];

    random2 = Math.floor(Math.random() * 10);
    console.log(random2);

    const resultMsg = [
        'ラッキーアイテムは青チャートです',
        'ラッキーアイテムは手袋です',
        '公園に行くと良いでしょう',
        'お餅を食べると良いでしょう',
        '即ゼミを開くと吉',
        'ラッキーカラーは緑です！',
        'ラッキーカラーは青です！',
        'ラッキーカラーは赤です！',
        '体操すると良いでしょう',
        'ホンダ車を見ると良い事ありそう',
    ];

    msg2 = resultMsg[random2];

    document.getElementById('msgHeading').setAttribute('style', 'opacity: 1;');
    setTimeout(function() {
        document.getElementById('msg1').innerHTML = msg1;
    }, 1000);
    setTimeout(function() {
        document.getElementById('msg2').innerHTML = msg2;
    }, 2000);
    document.getElementById('playBtn').setAttribute('disabled', 'disabled');
    document.getElementById('resetBtn').removeAttribute('disabled');
}

function reset() {
    document.getElementById('msgHeading').setAttribute('style', 'opacity: 0;');
    document.getElementById('msg1').innerHTML = '';
    document.getElementById('msg2').innerHTML = '';
    document.getElementById('playBtn').removeAttribute('disabled');
    document.getElementById('resetBtn').setAttribute('disabled', 'disabled');
}
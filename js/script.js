$("#btn").on("click", function () {
    // const randomNum = Math.ceil(Math.random() * 2);
    // const str1 = $("#form").val();
    const inputWord = $("#form").val();
    const keyword = "うめのべ祭";
    let result = "";

    if (inputWord === keyword) {
        result = "Clear!! ※Q2をコピー機に送信しました。取りに行って下さい";
    } else {
        result = "失敗...";
    }
    console.log(inputWord);
    $("#result").html(result);
});



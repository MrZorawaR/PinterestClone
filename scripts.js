var arr = [
    {image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D"},
    {image: "https://images.unsplash.com/photo-1623317919880-22e783d83e98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1547241850-eb8a8754f95c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljfGVufDB8MXwwfHx8MA%3D%3D"},
    {image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljfGVufDB8MXwwfHx8MA%3D%3D"},
    {image: "https://images.unsplash.com/photo-1623421536507-65fc8ff4d263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1541359927273-d76820fc43f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D"},
    {image: "https://images.unsplash.com/photo-1498736297812-3a08021f206f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1617972882867-3707f274c115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1470049384172-927891aad5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1554049264-8ff0bee7eacd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1569114241780-d60b37693dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1494515426402-f1980ace7a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1524476271953-f48657ba69eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1619894129368-ecd7d69c3eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1596868801151-5d26796963b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1545992924-176c00cbcf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1526116977494-90748acc0cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1628832932484-1727f3e9ac38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1626437513709-7ed95e5d0008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
    {image: "https://images.unsplash.com/photo-1529689256291-8d1f52147fe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D"},
];

function showcards(){
    var addimage = "";
    arr.forEach(function(obj){
        addimage += `<div class="box">
        <img src="${obj.image}" alt="">
    </div>`
    })

    document.querySelector(".posts").innerHTML=addimage; 

}

showcards();

function handlesearch(){
    var searchinput = document.querySelector(".search-bar");

    searchinput.addEventListener("focus", function (){
        document.querySelector(".main-body").style.opacity = 0.2;
        document.querySelector(".main-body").style.transition = "0.2s";
    })

    searchinput.addEventListener("blur", function (){
        document.querySelector(".main-body").style.opacity = 1;
        document.querySelector(".main-body").style.transition = "0.2s";
    })
}

handlesearch();
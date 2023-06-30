function volume_sphere() {
    //Write your code here
    const form=document.querySelector("#MyForm")
    const radius=form["radius"].value;
    const volume=form["volume"].value;
    // console.log(radius)
    // console.log(volume)
    return radius*volume;

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

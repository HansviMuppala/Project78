var images = ["https://i.thenile.io/r1000/9780374300036.jpg?r=5ec269425bd53","", "https://thumbs.dreamstime.com/b/indian-girl-green-blue-outfit-illustration-94994951.jpg", "https://i.pinimg.com/originals/52/03/92/520392274681902997b195ec239124d1.jpg", "https://i.pinimg.com/originals/25/e2/54/25e254eddc14f3a42eb9c63a1dbe521d.jpg"];
var names = ["My Family Book","Sushma Muppala","Sreekanth Muppala", "Hansvi Muppala"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

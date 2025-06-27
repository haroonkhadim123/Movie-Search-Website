async function find(){
const movie=document.querySelector('#search').value;
const card=document.querySelector('.card');
const content= document.querySelector('.content');
const container=document.querySelector('.container');
const image=document.querySelector('.image');
const searchmovie=document.querySelector('.search-movie');
const api='d361271d';
 
  
      const url=`https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${api}`;
       
      if(movie===''){
        container.innerHTML='<h1>please enter movie name</h1>';
        
        return;
      }
    
   
     
    //   container.innerHTML=`Fetching...`
try {
     
    const respond= await fetch(url);
    if(!respond.ok){
        throw new Error(`${movie} is not available`)
    }
    const data= await respond.json();
  
    
    image.innerHTML=` <img src="${data.Poster}" alt="" width="300px">
            <h2>${data.Title} (${data.Year})</h2>`
            content.innerHTML=` <p><strong style="font-size: 20px;">Released:</strong>${data.Released}</p>
                <p><strong style="font-size: 20px;" >Genre:</strong>${data.Genre}</p>
                <p><strong style="font-size: 20px;" >Director:</strong>${data.Director}<p>
                <p><strong style="font-size: 20px;"  >Actor:</strong>${data.Actors}</p>
                <p><strongstyle="font-size: 20px;">Plot:</strong>${data.Plot}</p>
                <p><strong style="font-size: 20px;" >Language:</strong>${data.Language}</p>
                <p><strong style="font-size: 20px;" >Rating:</strong>${data.imdbRating}</p>`
                card.style.display='block';
                

                const button=document.createElement('button');
                button.innerHTML='Show more';
                button.addEventListener('click', function(){
                    content.classList.toggle('show-content')
                    if(button.innerHTML==='Exit'){
                        button.innerHTML='show more';
                    }
                    else{
                        button.innerHTML='Exit'
                    }
                    
                })
                card.appendChild(button);
                
                

} catch (error) {
    console.log("Error in fetching",error);
    container.innerHTML=`Movie is not found`;
    
}



}


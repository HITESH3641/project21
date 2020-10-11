function hasCollided(b1,w1){
    if(w1.x-b1.x <(b1.width/2+w1.width/2)&&b1.x-w1.x <(b1.width/2+w1.width/2) ){
      return true;
    }else
    {return false;
    }
  
  }
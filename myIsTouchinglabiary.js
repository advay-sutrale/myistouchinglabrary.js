function istouching(omkar,advay){
    if (omkar.x - advay.x < advay.width/2 + omkar.width/2
    && advay.x - omkar.x < advay.width/2 + omkar.width/2
      && omkar.y - advay.y < advay.height/2 + omkar.height/2
      && advay.y - omkar.y <advay.height/2 + omkar.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
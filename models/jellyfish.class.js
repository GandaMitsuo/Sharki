class JellyFish extends MoveableObject {
  speed = 0.2;
  height = 80;
  width = 80;
  live = 15;
  attackPower = 50;
  isShocked = false;
  direction = 1;
  randomIndex = 0;
  difficulty;
  speed = 0;
  SwimLine;
  jumping = 0;
  Swim_Images = [];
  Dead_Images = [];
  colx = 20;
  coly = 15;
  colwidth = 40;
  colheight = 40;
  Swim_ImagesLila = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  Swim_ImagesYellow = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  Swim_ImagesGreen = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];
  Swim_ImagesPink = [
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];
  Dead_ImagesLila = [
    "./img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];
  Dead_ImagesYellow = [
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];
  Dead_ImagesGreen = [
    "./img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g4.png",
  ];
  Dead_ImagesPink = [
    "./img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png",
  ];

  constructor(img, x, toX, difficulty) {
    super().loadImage(img);
    this.getAttribute(difficulty);
    this.setSwimImages();
    this.setDeadImages()
    this.loadImages(this.Swim_Images);
    this.loadImages(this.Dead_Images);
    this.getCoordinate(x, toX);
    this.Animate();
  }

  /**
   * Place the jellyfish from the respective coordinates
   * @param {any} x
   * @param {any} toX
   * @returns {any}
   */
  getCoordinate(x, toX) {
    this.x = x + Math.random() * toX;
    this.y = 80 + Math.random() * 350;
    this.SwimLine = this.y;
  }

  /**
   * sets the speed and the level of difficulty
   * @param {any} difficulty
   * @returns {any}
   */
  getAttribute(difficulty) {
    this.difficulty = difficulty;
    this.randomIndex = this.getRandomInt();
    this.speed = this.randomIndex / 4 + Math.random() * 0.15;
  }

  /**
   * selects the swim images from the type
   * @returns {any}
   */
  setSwimImages() {
    this.Swim_Images = this.getRandomImage(this.Swim_Images, this.Swim_ImagesPink, this.Swim_ImagesGreen, this.Swim_ImagesLila, this.Swim_ImagesYellow);
  }

  /**
   * selects the dead images from the type
   * @returns {any}
   */
  setDeadImages() {
    this.Dead_Images = this.getRandomImage(this.Dead_Images, this.Dead_ImagesPink, this.Dead_ImagesGreen, this.Dead_ImagesLila, this.Dead_ImagesYellow);
  }

  /**
   * randomly select the color and level of difficulty
   * @returns {any}
   */
  getRandomInt() {
    return Math.floor(Math.random() * 2 + this.difficulty) + 1;
  }

  /**
   * selects the color or images depending on the level of difficulty
   * @param {any} images
   * @param {any} img1
   * @param {any} img2
   * @param {any} img3
   * @param {any} img4
   * @returns {any}
   */
  getRandomImage(images, img1, img2, img3, img4) {
    let selectedImages;
    selectedImages = this.randomDifficultyHard(selectedImages, img1, img2);
    selectedImages = this.randomDifficultyEasy(selectedImages, img3, img4);
    return this.addTyp(selectedImages, images);
  }

  /**
   * each chooses one of the easy ones
   * @param {any} selectedImages
   * @param {any} img3
   * @param {any} img4
   * @returns {any}
   */
  randomDifficultyEasy(selectedImages, img3, img4) {
    if (this.randomIndex === 3) {
      selectedImages = this.selectTyp(selectedImages, img3, 33);
    }
    if (this.randomIndex === 4) {
      selectedImages = this.selectTyp(selectedImages, img4, 33);
    }
    return selectedImages;
  }

  /**
   * each chooses one of the difficult ones
   * @param {any} selectedImages
   * @param {any} img1
   * @param {any} img2
   * @returns {any}
   */
  randomDifficultyHard(selectedImages, img1, img2) {
    if (this.randomIndex === 1) {
      selectedImages = this.selectTyp(selectedImages, img1, 50);
    }
    if (this.randomIndex === 2) {
      selectedImages = this.selectTyp(selectedImages, img2, 50);
    }
    return selectedImages;
  }

  /**
   * selects the attack power of the respective type
   * @param {any} selectedImages - the color of the jellyfish
   * @param {any} img
   * @param {any} value - the attack power of the jellyfish
   * @returns {any}
   */
  selectTyp(selectedImages, img, value) {
    selectedImages = img;
    this.attackPower = value;
    return selectedImages;
  }

  /**
   * choose the type or level of difficulty of the jellyfish
   * @param {any} selectedImages - the color of the jellyfish
   * @param {any} images
   * @returns {any}
   */
  addTyp(selectedImages, images) {
    for (let i = 0; i < selectedImages.length; i++) {
      images.push(selectedImages[i]);
    }
    return images;
  }

  /**
   * checks whether it is under the character
   * @returns {any}
   */
  isUnderTheChar() {
    return (
      this.y + this.colheight + this.coly >=
      world.character.y + world.character.coly + world.colheight
    );
  }

  /**
   * checks if it is above the swim line
   * @returns {any}
   */
  isAboveSwimLine() {
    return this.y + this.colheight + this.coly <= this.SwimLine;
  }

  /**
   * starts the various animations
   * @returns {any}
   */
  Animate() {
    this.aboveSwimLineAnimate();
    this.jumpAnimate();
    this.moveToCharAnimation();
    this.deadMoveAnimation();
    this.differentAnimations();
  }

  /**
   * determines the swimming direction of the jellyfish depending on the level of difficulty
   * @returns {any}
   */
  moveToCharAnimation() {
    if (this.randomIndex == 1) {
      this.moveToCharX();
      this.moveToCharY();
    } else if (this.randomIndex == 2) {
      this.moveToCharX();
    } else if (this.randomIndex == 3) {
      this.moveToCharY();
    } else {
      this.moveToCharX();
    }
  }

  /**
   * starts the dead, hurt and swim animations
   * @returns {any}
   */
  differentAnimations() {
    setInterval(() => {
      if (this.isDead()) {
        this.animation();
      } else if (this.isHurt()) {
        this.playAnimation(this.Dead_Images);
      } else {
        this.playAnimation(this.Swim_Images);
      }
    }, 170);
  }

  /**
   * animates the dead swim direction
   * @returns {any}
   */
  deadMoveAnimation() {
    setInterval(() => {
      if (this.isDead()) {
        this.y -= this.speedY;
        this.speedY + 0.01;
      }
    }, 1000 / 60);
  }

  /**
   * animates the jumping sequence
   * @returns {any}
   */
  jumpAnimate() {
    setInterval(() => {
      if (!this.isDead() && !this.isHurt()) {
        if (world.character.x + 800 >= this.x) {
          this.jumpsequenz();
        }
      }
    }, 1000 / 60);
  }

  /**
   * determines the swimline of the jellyfish
   * @returns {any}
   */
  aboveSwimLineAnimate() {
    setInterval(() => {
      if (this.isAboveSwimLine() && !this.isHurt() && !this.isDead()) {
        this.y += this.speedY;
      }
    }, 1000 / 60);
  }

  /**
   * makes the jellyfish jump
   * @returns {any}
   */
  jumpsequenz() {
    if (this.jumping >= 15) {
      if (!this.isAboveSwimLine()) {
        this.jumping = 0;
      }
    } else {
      this.y -= 5;
      this.jumping++;
    }
  }

  /**
   * lets it animate
   * @returns {any}
   */
  animation() {
    let i = this.currentImage % this.Dead_Images.length;
    let path = this.Dead_Images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }
}
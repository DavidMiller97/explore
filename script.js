let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();/*Como se iran ejecutando las animaciones de Scroll*/ 

timeline
  .to(".rock", 10, { y: -300 })/*elemento, duracion, lo que hara*/
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10"/*Indica que empezara 10 segundos antes, ya que cada to empieza despues del otro*/)
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })/*fromTo va de un estado a otro */
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",/*Define cuando empieza la animacion, cuando alcanza cierto elemento*/
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

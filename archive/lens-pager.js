(function(){
  const sections=[...document.querySelectorAll("main > section")];
  if(sections.length<2)return;
  document.body.classList.add("lens-paged");
  const controls=document.createElement("div");
  controls.className="lens-page-controls";
  controls.setAttribute("aria-label","Page navigation");
  controls.innerHTML='<button class="lens-page-step" type="button" data-page-prev aria-label="Previous page">&larr;</button><div class="lens-page-dots" data-page-dots></div><span class="lens-page-status" data-page-status></span><button class="lens-page-step" type="button" data-page-next aria-label="Next page">&rarr;</button>';
  document.body.append(controls);
  const prev=controls.querySelector("[data-page-prev]");
  const next=controls.querySelector("[data-page-next]");
  const dotsWrap=controls.querySelector("[data-page-dots]");
  const status=controls.querySelector("[data-page-status]");
  let activeIndex=0;
  sections.forEach((section,index)=>{
    if(!section.id)section.id=`lens-page-${index+1}`;
    section.setAttribute("aria-hidden","true");
    const dot=document.createElement("button");
    dot.className="lens-page-dot";
    dot.type="button";
    dot.setAttribute("aria-label",`Go to page ${index+1}`);
    dot.addEventListener("click",()=>setActive(index));
    dotsWrap.append(dot);
  });
  function setActive(index){
    const previousIndex=activeIndex;
    activeIndex=Math.max(0,Math.min(sections.length-1,index));
    sections.forEach((section,i)=>{
      const isActive=i===activeIndex;
      section.classList.toggle("is-page-active",isActive);
      section.classList.toggle("is-page-before",i<activeIndex);
      section.setAttribute("aria-hidden",String(!isActive));
      if(isActive)section.scrollTop=0;
    });
    [...dotsWrap.children].forEach((dot,i)=>{
      dot.classList.toggle("is-active",i===activeIndex);
      dot.setAttribute("aria-current",i===activeIndex?"step":"false");
    });
    prev.disabled=activeIndex===0;
    next.disabled=activeIndex===sections.length-1;
    status.textContent=`${activeIndex+1} / ${sections.length}`;
    document.body.classList.toggle("is-final-page",activeIndex===sections.length-1);
    document.dispatchEvent(new CustomEvent("lenspagechange",{detail:{activeIndex,previousIndex,activeSection:sections[activeIndex],previousSection:sections[previousIndex]}}));
  }
  window.lensPagerGoTo=setActive;
  window.lensPagerSections=sections;
  prev.addEventListener("click",()=>setActive(activeIndex-1));
  next.addEventListener("click",()=>setActive(activeIndex+1));
  document.querySelectorAll("[data-next-slide-cue]").forEach(button=>button.addEventListener("click",()=>setActive(activeIndex+1)));
  window.addEventListener("keydown",event=>{
    const editable=event.target.closest("input, textarea, select, [contenteditable='true']");
    if(editable)return;
    if(event.key==="ArrowRight"||event.key==="PageDown")setActive(activeIndex+1);
    if(event.key==="ArrowLeft"||event.key==="PageUp")setActive(activeIndex-1);
  });
  setActive(0);
})();

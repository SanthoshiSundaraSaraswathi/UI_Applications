const cursor = document.querySelector(".cursor")

// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
cursor.style.left = e.pageX + 'px'
cursor.style.top = e.pageY + 'px'
})

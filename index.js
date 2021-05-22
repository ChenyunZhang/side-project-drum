document.querySelectorAll(".drum").forEach(
    button => button.addEventListener("click", handleClick))

function handleClick(e) {
    console.log(e.target)
}

var bl = []
function refresh() {
    document.querySelector('#output').innerHTML =
    bl.map((elem, i) => {
        [t,p] = elem
        return `
            <div class="x${i % 2} y${p}">
            ${t}
            <span onclick="g('${i}')">OK</span>
            <span onclick="del('${t}')">NOPE</span>
            </div>
        `
    }).join('') 
}
function f(e) {
    bl.push([e.value, 0])
    bl.sort()
    e.value=''
    refresh()
}
function g(i) {
    bl[i][1] = bl[i][1] == 0 ? 1 : 0
    refresh()
}
function del(e) {
    console.log(e);
    bl = bl.filter(v => v[0] != e)
    refresh()
}
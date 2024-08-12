function pageNumber (pagecountproduct) {
    let pageMobail = []
  //  console.log(pagecountproduct)
    for (let i = 1; i <= pagecountproduct; i++) {
       pageMobail.push(i)
    }
    return pageMobail
}
export default pageNumber


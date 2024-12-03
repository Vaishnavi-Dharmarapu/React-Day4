const calculteTotal = (python,html,css) => python+html+css;
const  calculatePercentage=(total,maxMarks)=>(total/maxMarks)*100;
const Grade =(percentage)=>{
    if (percentage>90) return 'A';
    if (percentage>90) return 'B';
    return 'Fail';
};
const calculateGrade = () => {
const name = document.getElementById('studentName').value;
const program = document.getElementById('programName').value;
const python = parseInt(document.getElementById('python').value);
const html = parseInt(document.getElementById('HTML').value);
const css = parseInt(document.getElementById('CSS').value);


const totalMarks = calculateTotal(python, html, css);
const percentage = calculatePercentage(totalMarks, 300);
const grade = determineGrade(percentage);
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
<p><strong>${name}</strong> from <strong>${program}</strong></p>
<p>Total Marks: ${totalMarks} / 300</p>
<p>Percentage: ${percentage.toFixed(2)}%</p>
<p>Grade: ${grade}</p>`;
};
                                                                    
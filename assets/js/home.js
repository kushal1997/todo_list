function deleteTasks() {
    console.log('Starting deleteTasks function');

    const checkBoxes = document.querySelectorAll('input[name="taskToDelete"]:checked')
    const taskToDelete = Array.from(checkBoxes).map(checkbox => checkbox.value)
    
    fetch('/delete-tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskToDelete)
    })
        .then(response => response.json())
        .then(data => {
            if(data.reload){
                window.location.reload();
            }else{
                alert("error in deleting tasks")
            }
        })
        .catch(error => console.error('Error:', error));
    // .then(res=>{
    //     console.log('Data being sent:', JSON.stringify({ taskToDelete }));

    //     if(res.ok) console.log(res)
    //     else alert("Error deleteing tasks");
    // })
    // .catch(err=>{
    //     console.log(`error : ${err}`)
    // })
}
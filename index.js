const form = document.querySelector('form');
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const Expamt = event.target.ExpenseAmount.value;
    const Description = event.target.Description.value;
    const select = document.querySelector('select');
    const Category1 = select.value;
    const li = document.createElement('li');
    li.textContent = `${Expamt}-${Description}-${Category1}`;
    const deleteExpense = document.createElement('button');
    const EditExpense = document.createElement('button');
    deleteExpense.textContent = "delete expense";
    EditExpense.textContent = "edit expense";
    const serialized = JSON.stringify(li.textContent);
    localStorage.setItem(Description,serialized);
    const localised = JSON.parse(serialized);
    li.appendChild(deleteExpense);
    li.appendChild(EditExpense);
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    deleteExpense.addEventListener('click',function(){
        li.remove();
        localStorage.removeItem(Description);
    })
    EditExpense.addEventListener('click',function(){
        event.target.ExpenseAmount.value = Expamt;
        event.target.Description.value = Description;
        select.value = Category1;
        li.remove();
        localStorage.removeItem(Description);
    })
});

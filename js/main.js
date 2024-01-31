const { createApp } = Vue

createApp({
  data() {
    return {
      todoArray: [],
      textTask: "",
    }
  },
  methods: {
    addTask() {
        if(this.textTask !== ""){
            this.todoArray.unshift({text: `${this.textTask}`, done: false})
        }
        this.textTask = ""
    },
    removeTask(){
        this.todoArray.splice(this.index,1)
    },
    taskLine(index){
        if(this.todoArray[index].done === false){
          this.todoArray[index].done = true
        } else {
          this.todoArray[index].done = false
        }
    }
  },
}).mount('#todo')
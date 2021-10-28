<template>
  <section class="form__container metal">
    <h1 class="form__title">Contattaci</h1>
    <div class="form__wrapper" >
    <form
      class="form"
      action="https://api.form-data.com/f/9wa3kytxkttmfdrpfgxa3p"
      method="post"
    >
  <input type="text" id="fname" name="Nome" value="Nome">
  <input type="text" id="lname" name="Cognome" value="Cognome">
  <input type="text" id="object" name="Oggetto" value="Oggetto">
   <textarea  id="message" name="Messaggio" rows="10" ></textarea>
  <button class="btn" id="button" type="submit">Invia</button>
    </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "pageForm",
};
</script>

<style scoped>
.form__container {
  display: grid;
  grid-template-columns: repeat(8, 1fr [col-start]);
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  padding: 8% 0;
}

.form__container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: var(--color-primary);
}

.form__title {
  grid-column: 1 / span 3;
  justify-self: start;
  align-self: flex-start;
  margin: 0;
}

.form__wrapper {
  grid-column: 4 / span 8;
  justify-self: start;
  align-self: stretch;
  margin: 0;
}

.form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

input, textarea {
margin: 15px 5px;
  padding: 4px 8px;
  min-height: 48px;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  background-color: #e6e6e6;
 font-size: 1.25rem;
 line-height: 1.5;
  text-align: left;
  color: rgba(43, 39, 39, 0.5);
}

.form #fname {
    flex: 2 0 45%;
}

.form #lname {
    flex: 2 0 45%;

}

.form #object {
    flex: 100%;
}

.form #message {
 flex: 100%;
}

#button {
 flex: 100%;
 color: var(--color-text);
 position: relative;
cursor: pointer;
}

#button::after {
    content: "";
    position: realtive;
    width: 30px;
    height: 30px;
    float: right;
    padding: 0;
    margin: 0;
    line-height: 1.8;
    background-image: url("../assets/img/arrow-r.svg");
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
}


.form button {
position: relative;
margin: 15px 5px;
padding: 4px 8px;
min-height: 48px;
border-radius: 5px;
border: solid 1px #e0e0e0;
background-color: #e6e6e6;
font-size: 1.25rem;
line-height: 1.5;
text-align: left;
color: rgba(43, 39, 39, 0.5);
}



</style>

<script setup>
import {mdiEye, mdiEyeOff} from '@mdi/js';
import {reactive, ref} from 'vue'
import api from "../../api/api.js";

const message = ref({
  text: '',
  show: false,
})

const visible = ref(false)
const form = reactive({
  email: '',
  password: ''
})

async function login() {
  try {
    const {data} = await api.post('/auth/login', form)
    console.log(data)
  } catch (e) {
    message.value.text = e.response.data.message
    message.value.show = true
  }
  console.log(data)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col align-self="center">
        <div>
          <v-card
              class="mx-auto pa-12 pb-8"
              elevation="8"
              max-width="448"
              rounded="lg"
          >
            <div class="text-subtitle-1 text-medium-emphasis">Почта</div>

            <v-text-field
                density="compact"
                placeholder="Адрес электронной почты"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                v-model="form.email"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Пароль

              <a
                  class="text-caption text-decoration-none text-blue"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                Забыли пароль для входа в систему?</a>
            </div>

            <v-text-field
                :append-inner-icon="visible ? mdiEyeOff : mdiEye"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Введите свой пароль"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
                v-model="form.password"
            ></v-text-field>

            <div v-if="message.show">{{message.text}}</div>

            <v-card
                class="mb-12"
                color="surface-variant"
                variant="tonal"
            >
            </v-card>

            <v-btn
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                block
                @click="login"
            >
              Войти
            </v-btn>

            <v-card-text class="text-center">
              <a
                  class="text-blue text-decoration-none"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                Зарегистрируйтесь прямо сейчас
                <v-icon icon="mdi-chevron-right"></v-icon>
              </a>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
}
</script>
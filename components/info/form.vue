<script setup lang="ts">
import { nextTick } from 'vue';
import type { Form } from '@/types';
import type { FormError, FormSubmitEvent } from '#ui/types';

const drinks = ref([
  { name: 'Vodka-Narancs', value: 'vodka' },
  { name: 'Jägermeister', value: 'jager' },
  { name: 'Pálinka', value: 'palinka' },
  { name: 'Gin-Tonic', value: 'gin-tonic' },
  { name: 'Aperol', value: 'aperol' },
  { name: 'Tequila', value: 'tequila' },
  { name: 'Sör', value: 'beer' },
  { name: 'Whiskey', value: 'whiskey' },
  { name: 'Bor', value: 'wine' },
  { name: 'Rum', value: 'rum' },
  { name: 'Nem iszom alkoholt', value: 'dont-drink' },
]);

const songs = ref<string[]>([]);

const state = reactive<Form>({
  myName: '',
  email: '',
  beThere: null,
  needsAccom: null,
  favMusic: '',
  favDrinks: [],
});

const yesNoMaybe = [
  {
    value: 'yes',
    label: 'Igen',
  },
  {
    value: 'no',
    label: 'Nem',
  },
  {
    value: 'maybe',
    label: 'Még nemtudom',
  },
];

const validate = (state: any): FormError[] => {
  const errors = [];

  if (!state.myName) {
    errors.push({
      path: 'myName',
      message: 'A nevedre szükség lesz különben nem tudjuk ki vagy 😊',
    });
  }

  if (!state.email) {
    errors.push({
      path: 'email',
      message:
        'Szükség lesz az e-mailedre, ne aggódj nem kerül rossz kezekbe.👌',
    });
  }

  if (!state.beThere) {
    errors.push({
      path: 'beThere',
      message: 'Kérlek válaszolj, hogy ott leszel-e az esküvőn. ',
    });
  }

  if (!state.needsAccom) {
    errors.push({
      path: 'needsAccom',
      message: 'Kérlek válaszolj, hogy szükséged van-e szállásra. ',
    });
  }

  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // items from songs.value should go into state.favMusic
  event.data = {
    ...event.data,
    favMusic: songs.value,
  };

  // reset the form values
  handleResetForm();

  console.log(event.data);
}

function shouldDisableCheckbox(value: string): boolean {
  return (
    (state.favDrinks?.includes('dont-drink') ?? false) && value !== 'dont-drink'
  );
}

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input.value.trim();

  if (value.endsWith(',')) {
    const song = value.slice(0, -1).trim();
    if (song) {
      songs.value.push(song);
      nextTick(() => {
        state.favMusic = ''; // Reset the input field after adding the song
      });
    }
  }
}

function removeSong(index: number) {
  songs.value.splice(index, 1);
}

function handleResetForm() {
  state.myName = '';
  state.email = '';
  state.beThere = null;
  state.needsAccom = null;
  state.favMusic = '';
  state.favDrinks = [];
  songs.value = [];
}
</script>

<template>
  <UContainer class="py-16 xl:pt-24 border-neutral-400/50">
    <UForm
      :validate="validate"
      :state="state"
      class="grid gap-8 transition-all duration-300 ease-in-out md:grid-cols-2"
      @submit="onSubmit"
    >
      <UFormGroup name="myName">
        <template #label>
          <p class="font-medium text-white">Neved</p>
        </template>
        <template #hint>
          <span class="text-[11px] tracking-wide"
            >Ha kísérővel jössz, ő is töltse ki külön!</span
          >
        </template>
        <UInput v-model="state.myName" type="text" />
      </UFormGroup>

      <UFormGroup name="email">
        <template #label>
          <p class="font-medium text-white">E-mail címed</p>
        </template>
        <template #hint>
          <span class="text-[11px] tracking-wide"
            >Hogy bármiről értesíteni tudjunk.</span
          >
        </template>
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup name="beThere" class="space-y-2">
        <template #label>
          <div class="flex items-end gap-2">
            <p class="font-medium text-white">Ott tudsz lenni az esküvőn?</p>
            <span class="text-[11px] tracking-wide"></span>
          </div>
        </template>
        <!-- <template #hint>
          <span class="text-[11px] tracking-wide"
            >Kérlek május 31.-ig jelezz vissza.</span
          >
        </template> -->
        <URadioGroup v-model="state.beThere" :options="yesNoMaybe" />
      </UFormGroup>

      <UFormGroup name="needsAccom" class="space-y-2">
        <template #label>
          <div class="flex items-end gap-2">
            <p class="font-medium text-white">Szükséged van szállásra?</p>
            <span class="text-[11px] tracking-wide"></span>
          </div>
        </template>
        <URadioGroup
          class="space-y-2"
          v-model="state.needsAccom"
          :options="yesNoMaybe"
        />
      </UFormGroup>

      <UFormGroup name="favMusic" class="transition-all col-span-full">
        <template #label>
          <p class="">Milyen zenét hallgatnál a buliban?</p>
        </template>
        <template #help>
          <span class="text-[11px] tracking-wide"
            >Többet is írhatsz, a számok után TEGYÉL vesszőt
            <UKbd size="sm" value="," />!</span
          >
        </template>
        <UInput v-model="state.favMusic" @input="handleInput" />
        <div class="flex flex-wrap gap-1" :class="{ 'mt-2': songs.length > 0 }">
          <UButton
            v-for="(song, index) in songs"
            :key="index"
            class="mr-2"
            color="primary"
            :padded="false"
            variant="link"
            @click="removeSong(index)"
          >
            <template #leading>
              <UIcon
                name="i-heroicons-x-mark"
                size="sm"
                class="mb-1.5"
                :padded="false"
                square
              />
            </template>
            <span class="">
              {{ song }}
            </span>
          </UButton>
        </div>
      </UFormGroup>

      <UFormGroup name="favDrinks" class="space-y-2 col-span-full">
        <template #label>
          <p class="">Milyen italt innál a buliban?</p>
        </template>
        <div class="space-y-2 columns-2 md:columns-3">
          <UCheckbox
            v-for="d in drinks"
            :key="d.name"
            :id="d.value"
            v-model="state.favDrinks"
            name="favDrinks"
            :value="d.value"
            :disabled="shouldDisableCheckbox(d.value)"
          >
            <template #label>
              <span :class="{ 'opacity-60': shouldDisableCheckbox(d.value) }">{{
                d.name
              }}</span>
            </template>
          </UCheckbox>
        </div>
      </UFormGroup>

      <!-- <pre class="py-4">{{ state }}</pre> -->

      <div class="mx-auto col-span-full">
        <UButton
          class="px-10 py-2 text-lg font-bold transition-all shadow-sm dark:text-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-dark-100 bg-accent-500 hover:bg-accent-300 disabled:bg-accent-100/50 dark:hover:bg-accent-500 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
          type="submit"
        >
          Elküld
        </UButton>
      </div>
    </UForm>
  </UContainer>
</template>

<style>
#__nuxt
  > main
  > div.mx-auto.px-4.sm\:px-6.lg\:px-8.max-w-7xl.py-6
  > div.mx-auto.px-4.sm\:px-6.lg\:px-8.max-w-7xl.py-16.xl\:pt-24.border-neutral-400\/50
  > form
  > div:nth-child(4)
  > div:nth-child(2)
  > div
  > fieldset {
  @apply space-y-2;
}

#__nuxt
  > main
  > div.mx-auto.px-4.sm\:px-6.lg\:px-8.max-w-7xl.py-6
  > div.mx-auto.px-4.sm\:px-6.lg\:px-8.max-w-7xl.py-16.xl\:pt-24.border-neutral-400\/50
  > form
  > div:nth-child(3)
  > div:nth-child(2)
  > div
  > fieldset {
  @apply space-y-2;
}
</style>

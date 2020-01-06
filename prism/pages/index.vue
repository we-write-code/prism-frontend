<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3">
        <v-card>
          <v-toolbar color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Username" name="username" type="text" prepend-icon="mdi-pool" />
              <v-text-field label="Password" name="password" type="password" prepend-icon="mdi-camera" />
            </v-form>
          </v-card-text>
          <v-divider class="mx-3" />
          <v-card-actions class="pa-3">
            <v-spacer />
            <v-btn large>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'plain',
  components: {
  },
};
</script>

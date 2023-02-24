<template>
    <v-row>
       <v-col cols="10" offset="1" md="4" offset-md="4">
        <v-card class="mb-2">
            <v-toolbar color="primary" dark>Register</v-toolbar>
            <v-card-text>
                <v-form>
                    <v-text-field
                    name="name"
                    label="Full Name"
                    type="text" />
                    <v-text-field
                    name="email"
                    label="email"
                    type="email" />
                    <v-text-field
                    name="password"
                    label="password"
                    type="password" />
                    <v-text-field
                    name="repassword"
                    label="Re-password"
                    type="password" />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Register</v-btn>
            </v-card-actions>
        </v-card>
        <p>already have an account? <v-btn to="/login" plain>login</v-btn></p>
       </v-col>
    </v-row>
</template>
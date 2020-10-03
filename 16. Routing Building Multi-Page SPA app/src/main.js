import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";
import TeamsFooter from "@/components/teams/TeamsFooter";
import UsersFooter from "@/components/users/UsersFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/teams"},
        {
            path: "/teams",
            components: {
                default: TeamsList,
                footer: TeamsFooter
            }, name: "teams",
            children: [
                {name: "team-members", path: "/teams/:teamId", component: TeamMembers, props: true}]
        },
        {
            path: "/users", components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        {path: "/:notFound(.*)", component: NotFound}
    ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

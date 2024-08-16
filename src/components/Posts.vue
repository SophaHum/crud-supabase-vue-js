<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>
            <button class="text-green-400 bg-gray-800 button" @click="editPost(post)">Edit</button>
            <button class="text-red-800 bg-red-300 button" @click="deletePost(post)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="createPost">
      <input class="m-2 border-2" type="text" v-model="title" />
      <input class="m-2 border-2" type="text" v-model="content" />
      <button class="m-2 bg-green-500" type="submit">Create</button>
    </form>
  </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../supabase";

const posts = ref([]);
// new post get value from html attrubute
const newPost = ref({ title: "", content: "" });
const title = ref("");
const content = ref("");

onMounted(async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    console.error(error);
  } else {
    posts.value = data;
  }
});
const createPost = async () => {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ title: title.value, content: content.value }]);
  if (error) {
    console.error(error);
  } else {
  //  update data to table
    posts.value.push({ title: title.value, content: content.value });
    title.value = "";
    content.value = "";
  }
};
const deletePost = async (post) => {
  const { error } = await supabase
    .from("posts")
    .delete()
    .match({ id: post.id });
  if (error) {
    console.error(error);
  } else {
    posts.value = posts.value.filter((p) => p.id !== post.id);
  }
};
const editPost = (post) => {
  title.value = post.title;
  content.value = post.content;
};
</script>
<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #16d7e1;
}
th {
  background-color: #416bdc;
  color: rgb(0, 0, 0);
}
button{
  margin-right: 10px;
}
</style>
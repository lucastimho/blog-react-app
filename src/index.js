import "./index.css";

function Index() {
  return (
    <div id="root">
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="isLoggedIn()">
        <strong>Successfully Logged In!</strong>
        You are free to make posts now.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default Index();

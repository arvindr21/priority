<script lang="ts">
  import CardList from "../shared/card/card-list.svelte";
</script>

<div class="m-2 p-2">
  <div class="row">
    <div class="col">
      <CardList color="white" cardbg="danger" heading="Important & Urgent" />
    </div>
    <div class="col">
      <CardList color="white" cardbg="success" heading="Important & Not Urgent" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <CardList color="white" cardbg="info" heading="Not Important & Urgent" />
    </div>
    <div class="col">
      <CardList color="dark" cardbg="secondary" heading="Not Important & Not Urgent" />
    </div>
  </div>
</div>

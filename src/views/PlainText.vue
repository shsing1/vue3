<template lang="pug">
  .demo
    //- 使用管道符
    | Plain text can include <strong>html</strong>
    p
      | It must always be on its own line
    //- 同行
    .content content
    #content.content.box content
    //- 使用點號
    p.
      Jade is a terse and simplae
      templating language with a
      strong focus on performance
      and powerful features.
</template>

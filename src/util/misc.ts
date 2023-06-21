function rhfServerAdapter<TFormSchema, TServerFunctionReturn>(
  serverFunction: (payload: TFormSchema) => Promise<TServerFunctionReturn>,
  options: {
    onSuccess?: (data: TServerFunctionReturn) => void;
    onFail?: (reason: Error) => void;
    onComplete?: () => void;
  }
) {
  const { onSuccess, onFail, onComplete } = options;
  return (data: TFormSchema) => {
    serverFunction(data).then(onSuccess).catch(onFail).finally(onComplete);
  };
}

export { rhfServerAdapter };

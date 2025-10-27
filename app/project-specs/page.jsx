'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function ProjectSpecsPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = data => {
    router.push(`/brand-names?projectName=${data.projectName}&description=${data.description}&industry=${data.industry}&audience=${data.audience}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <input {...register('projectName')} placeholder="Project Name" className="p-2 border rounded"/>
      <textarea {...register('description')} placeholder="Project Description" className="p-2 border rounded"/>
      <input {...register('industry')} placeholder="Industry" className="p-2 border rounded"/>
      <input {...register('audience')} placeholder="Target Audience" className="p-2 border rounded"/>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Generate Names</button>
    </form>
  );
}

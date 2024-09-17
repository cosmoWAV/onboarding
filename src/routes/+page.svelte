<script lang="ts">
	import '../app.css';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Pagination from '$lib/components/ui/pagination';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	const users = [
		{
			userID: 'USR001',
			firstName: 'John',
			lastName: 'Doe',
			phoneNumber: '+1234567890',
			country: 'USA',
			email: 'john.doe@example.com'
		},
		{
			userID: 'USR002',
			firstName: 'Jane',
			lastName: 'Smith',
			phoneNumber: '+0987654321',
			country: 'Canada',
			email: 'jane.smith@example.com'
		},
		{
			userID: 'USR003',
			firstName: 'Alice',
			lastName: 'Johnson',
			phoneNumber: '+1122334455',
			country: 'UK',
			email: 'alice.johnson@example.com'
		},
		{
			userID: 'USR004',
			firstName: 'Bob',
			lastName: 'Brown',
			phoneNumber: '+2233445566',
			country: 'Australia',
			email: 'bob.brown@example.com'
		},
		{
			userID: 'USR005',
			firstName: 'Carol',
			lastName: 'Davis',
			phoneNumber: '+3344556677',
			country: 'Germany',
			email: 'carol.davis@example.com'
		},
		{
			userID: 'USR006',
			firstName: 'David',
			lastName: 'Wilson',
			phoneNumber: '+4455667788',
			country: 'France',
			email: 'david.wilson@example.com'
		},
		{
			userID: 'USR007',
			firstName: 'Eva',
			lastName: 'Taylor',
			phoneNumber: '+5566778899',
			country: 'Spain',
			email: 'eva.taylor@example.com'
		}
	];
</script>

<div class="header">
	<h1 class="text-3xl">Onboarding App</h1>
	<div class="button-container">
		<Button>Create</Button>
		<Button>Upload</Button>
	</div>
</div>

<hr class="dashed" />

<section>
	<div class="table-wrapper">
		<div class="search-container">
			<Input class="search-bar mr-5" type="text" id="search-bar" placeholder="Search by keyword" />
			<Button class="search-button mr-12">Search</Button>
		</div>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">User ID</Table.Head>
					<Table.Head>First Name</Table.Head>
					<Table.Head>Last Name</Table.Head>
					<Table.Head>Phone Number</Table.Head>
					<Table.Head>Country</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Update</Table.Head>
					<Table.Head>Delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each users as user, i (i)}
					<Table.Row>
						<Table.Cell class="font-medium">{user.userID}</Table.Cell>
						<Table.Cell>{user.firstName}</Table.Cell>
						<Table.Cell>{user.lastName}</Table.Cell>
						<Table.Cell>{user.phoneNumber}</Table.Cell>
						<Table.Cell>{user.country}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell><Button>Update</Button></Table.Cell>
						<Table.Cell><Button>Delete</Button></Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<Pagination.Root count={100} perPage={10} let:pages let:currentPage>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item isVisible={currentPage == page.value}>
							<Pagination.Link {page} isActive={currentPage == page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton />
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</div>
</section>

<style>
	.header {
		display: flex;
		padding: 10px;
		justify-content: space-between;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 50vh;
		padding: 20px;
		box-sizing: border-box;
	}

	.table-wrapper {
		margin-top: 5px;
		width: 100%;
		max-width: 1200px;
		overflow-x: auto;
	}

	hr.dashed {
		border-top: 3px solid #bbb;
		border-radius: 5px;
	}

	.search-container {
		display: flex;
		align-items: center;
		padding: 5px;
	}

	.button-container {
		display: flex;
		gap: 10px;
	}
</style>

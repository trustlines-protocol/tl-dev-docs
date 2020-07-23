---
layout: default
---

<!-- Section -->
<section>
	<header class="major">
		<h2>Trustlines Protocol</h2>
	</header>
	<div class="features">
		<article>
			<span class="icon fa-cubes"></span>
			<div class="content">
				<h3>Trustlines Blockchain</h3>
				<p>The Trustlines Blockchain is a minimal viable Proof-of-Stake (mPoS) Ethereum sidechain.</p>
			</div>
		</article>
		<article>
			<span class="icon fa-desktop"></span>
			<div class="content">
				<h3>Client library</h3>
				<p>The clientlib is a JS-library which makes it easy to build applications on top of the Trustlines Protocol. It provides a high level API to enable applications to interact with the smart contract system on the blockchain via the relay servers.</p>
			</div>
		</article>
		<article>
			<span class="icon fa-server"></span>
			<div class="content">
				<h3>Relay Servers</h3>
				<p>The Relay Servers are an optional bridge between client apps and the Trustlines blockchain. They offer services which are not feasible to be implemented on-chain or within the client apps. Importantly, Relay servers calculate optimal paths and
					relay transactions.</p>
			</div>
		</article>
		<article>
			<span class="icon fa-database"></span>
			<div class="content">
				<h3>Smart Contract System</h3>
				<p>The smart contract system is a collection of solidity contracts deployed on the Trustlines Blockchain. Transfers within the Trustlines Network are executed by the smart contracts. All trustlines (i.e. credit lines and balances between users) are
					notarized on the Trustlines Blockchain. Furthermore, the smart contracts enforce the rules determining how trustlines can be created, used and updated.</p>
			</div>
		</article>
	</div>
</section>

<!-- Section -->
<section>
	<header class="major">
		<h2>Latest updates</h2>
	</header>
	<div class="posts">
		<article>
			<ul>
				{% for post in site.posts limit:1 %}
<!-- 						<a href="{{ post.url | absolute_url | absolute_url }}" class="image"><img src="{{ post.image }}"/></a> -->
						{{ post.date | date: '%B %d, %Y'}}
						<h3>{{ post.title }}</h3>
						{{ post.excerpt }}
							<a href="{{ post.url | absolute_url }}" class="button">Read more ⟶</a>
				{% endfor %}
			</ul>
		</article>
		<article>
			<ul>
				{% for post in site.posts limit:1 offset:1 %}
						<!-- <a href="{{ post.url | absolute_url }}" class="image"><img src="{{ post.image }}"/></a> -->
						{{ post.date | date: '%B %d, %Y'}}
						<h3>{{ post.title }}</h3>
						{{ post.excerpt }}
							<a href="{{ post.url | absolute_url }}" class="button">Read more ⟶</a>
				{% endfor %}
			</ul>
		</article>
		<article>
			<ul>
				{% for post in site.posts limit:1 offset:2 %}
						<!-- <a href="{{ post.url | absolute_url }}" class="image"><img src="{{ post.image }}"/></a> -->
						{{ post.date | date: '%B %d, %Y'}}
						<h3>{{ post.title }}</h3>
						{{ post.excerpt }}
							<a href="{{ post.url | absolute_url }}" class="button">Read more ⟶</a>
				{% endfor %}
			</ul>
		</article>
		<article>
			<ul>
				{% for post in site.posts limit:1 offset:3 %}
						<!-- <a href="{{ post.url | absolute_url }}" class="image"><img src="{{ post.image }}"/></a> -->
						{{ post.date | date: '%B %d, %Y'}}
						<h3>{{ post.title }}</h3>
						{{ post.excerpt }}
							<a href="{{ post.url | absolute_url }}" class="button">Read more ⟶</a>
				{% endfor %}
			</ul>
		</article>
	</div>
</section>
